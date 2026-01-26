const DEV_URL = "http://127.0.0.1:8000";
const PROD_URL = "https://pro-hire.onrender.com";
const BASE_URL = process.env.NODE_ENV === "development" ? DEV_URL : PROD_URL;

export async function parseResume(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/parse-resume`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to parse resume: ${errorText}`);
  }

  return res.json(); // { name, job_role, email, phone }
}
