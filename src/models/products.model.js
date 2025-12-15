import { db } from "../data/firebase.js";

const collectionRef = db.collection("products");

export const ProductsModel = {
  async getAll() {
    const snapshot = await collectionRef.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  async getById(id) {
    const docRef = collectionRef.doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) return null;

    return { id: docSnap.id, ...docSnap.data() };
  },

  async create(data) {
    // data: { name, price, stock }
    const docRef = await collectionRef.add(data);
    return { id: docRef.id, ...data };
  },

  async update(id, data) {
    const docRef = collectionRef.doc(id);

    // chequeo existencia antes de update
    const docSnap = await docRef.get();
    if (!docSnap.exists) return null;

    await docRef.update(data);
    const updated = await docRef.get();
    return { id: updated.id, ...updated.data() };
  },

  async remove(id) {
    const docRef = collectionRef.doc(id);

    const docSnap = await docRef.get();
    if (!docSnap.exists) return false;

    await docRef.delete();
    return true;
  },
};
