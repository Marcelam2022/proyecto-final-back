import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getServiceAccount() {
  // ✅ Vercel: JSON completo en una env var
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  }

  // ✅ Local: archivo json (ignorado por git)
  const serviceAccountPath = path.join(__dirname, "../keys/firebase-admin.json");
  return JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(getServiceAccount()),
  });
}

export const db = admin.firestore();


