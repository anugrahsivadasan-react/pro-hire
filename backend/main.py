# main.py
# Run with:
# python -m venv venv
# venv\Scripts\activate
# uvicorn main:app --reload

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pdfplumber
from docx import Document
import re
import spacy
import phonenumbers
import os
import shutil
import fitz  # PyMuPDF

# ---------------- APP SETUP ----------------
app = FastAPI()

# Enable CORS for React frontend
# 🔹 Updated: include frontend URL correctly (no trailing slash)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://pro-hire-ziya.vercel.app"],  # frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

# Load NLP model
nlp = spacy.load("en_core_web_sm")

# Upload directory
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


# ---------------- TEXT EXTRACTION ----------------
def extract_text(file_path: str):
    if file_path.endswith(".pdf"):
        collected = []
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    collected.append(text)
        return "\n".join(collected)

    if file_path.endswith(".docx"):
        doc = Document(file_path)
        return "\n".join(p.text for p in doc.paragraphs)

    return ""


# ---------------- NORMALIZATION ----------------
def collapse_spaced_words(text: str):
    # Converts: D E V E L O P E R → DEVELOPER
    return re.sub(
        r"(?:\b[A-Z]\b\s*){3,}",
        lambda m: m.group(0).replace(" ", ""),
        text
    )


def normalize_text(line: str):
    line = collapse_spaced_words(line)
    line = re.sub(r"\s{2,}", " ", line)
    return line.strip()


# ---------------- EMAIL EXTRACTION ----------------
def extract_email_from_links(pdf_path: str):
    try:
        doc = fitz.open(pdf_path)
        for page in doc:
            # Check clickable links
            for link in page.get_links():
                uri = link.get("uri")
                if uri and uri.startswith("mailto:"):
                    return uri.replace("mailto:", "").split("?")[0]

            # Check annotations
            for annot in page.annots() or []:
                uri = annot.info.get("uri")
                if uri and uri.startswith("mailto:"):
                    return uri.replace("mailto:", "").split("?")[0]
    except Exception:
        pass

    return None


def extract_email(text: str, file_path: str):
    pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    found = re.findall(pattern, text)
    if found:
        return found[0]

    if file_path.endswith(".pdf"):
        return extract_email_from_links(file_path)

    return None


# ---------------- PHONE EXTRACTION ----------------
def extract_phone(text: str):
    for match in phonenumbers.PhoneNumberMatcher(text, "IN"):
        return phonenumbers.format_number(
            match.number,
            phonenumbers.PhoneNumberFormat.E164
        )
    return None


# ---------------- JOB ROLE EXTRACTION ----------------
def extract_job_role(text: str):
    lines = [normalize_text(l) for l in text.split("\n") if l.strip()]

    keywords = [
        "data analyst", "ai/ml developer", "ml engineer",
        "designer", "developer", "engineer", "analyst",
        "frontend", "backend", "full stack", "react"
    ]

    blocked = [
        "passionate", "experience", "experienced",
        "hands-on", "freelance", "profile",
        "behance", "github", "linkedin",
        "portfolio", "link",
        "best practices", "modern", "building", "using"
    ]

    role_nouns = ["developer", "engineer", "designer"]

    for line in lines[:12]:
        lower = line.lower()

        if any(k in lower for k in keywords):
            if "frontend" in lower and not any(r in lower for r in role_nouns):
                continue
            if not any(b in lower for b in blocked):
                words = line.split()
                if "with" in lower:
                    words = words[:lower.split().index("with")]
                return " ".join(words[:4]).replace("/", " / ").title()

    for line in lines:
        lower = line.lower()
        for noun in role_nouns:
            if noun in lower:
                return f"{noun.title()}"

    return None


def normalize_job_role(role, text):
    if not role:
        return None

    content = text.lower()
    base = role.lower()

    if "frontend" in base or "react" in base:
        return "React Frontend Developer"

    if base == "designer":
        if any(k in content for k in ["ui", "ux", "user interface", "user experience"]):
            return "UI/UX Designer"

    return role


# ---------------- NAME EXTRACTION ----------------
def extract_name(text: str):
    lines = [normalize_text(l) for l in text.split("\n") if l.strip()]

    # Try first few top lines (usually name is there)
    for line in lines[:5]:
        if any(c.isdigit() for c in line):
            continue
        if "@" in line:
            continue
        if 2 <= len(line.split()) <= 4:
            return line.title()

    # NLP fallback
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ == "PERSON" and not any(c.isdigit() for c in ent.text):
            return ent.text

    return None


# ---------------- API 1 : PARSE RESUME ----------------
@app.post("/parse-resume")
async def parse_resume(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(file_path)

    role = extract_job_role(text)
    role = normalize_job_role(role, text)

    return {
        "name": extract_name(text),
        "job_role": role,
        "email": extract_email(text, file_path),
        "phone": extract_phone(text)
    }


# ---------------- API 2 : EMPLOYEE FORM ----------------
class EmployeeData(BaseModel):
    name: str
    designation: str
    salary: str
    department: str
    joiningDate: str
    email: str


@app.post("/submit-employee")
async def submit_employee(data: EmployeeData):
    # Later you can store this in DB or generate offer/appointment letters
    return {
        "status": "success",
        "message": f"Employee {data.name} saved successfully!",
        "data": data
    }
