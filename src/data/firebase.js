import admin from "firebase-admin";

if (!admin.apps.length) {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Vercel / Producción
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT
    );

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    // Local
    const serviceAccount = await import("../keys/firebase-admin.json", {
      assert: { type: "json" },
    });

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount.default),
    });
  }
}

export const db = admin.firestore();

