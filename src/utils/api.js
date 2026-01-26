const BASE_URL = "https://pro-hire.onrender.com";

export async function parseResume(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/parse-resume/`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to parse resume");
  return res.json(); // { name, job_role, email, phone }
}