import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const PACKAGES_COLLECTION_ID = "packages";

/* ---------- Normalizer ---------- */
function normalizePackage(doc) {
  return {
    id: doc.$id,
    title: doc.title,
    slug: doc.slug,
    description: doc.description,
    theme: doc.theme,
    days: doc.daysRange,
    images: doc.images ?? [],
    featured: doc.isFeatured ?? false,
  };
}

/* ---------- Get all packages ---------- */
export async function getAllPackages(limit = 30) {
  try {
    const res = await databases.listDocuments(
      DATABASE_ID,
      PACKAGES_COLLECTION_ID,
      [
        Query.equal("published", true),
        Query.orderDesc("$createdAt"),
        Query.limit(limit),
      ]
    );

    return res.documents.map(normalizePackage);
  } catch (err) {
    console.error("Failed to fetch packages", err);
    return [];
  }
}

/* ---------- Get featured packages ---------- */
export async function getFeaturedPackages(limit = 6) {
  try {
    const res = await databases.listDocuments(
      DATABASE_ID,
      PACKAGES_COLLECTION_ID,
      [
        Query.equal("published", true),
        Query.equal("isFeatured", true),
        Query.limit(limit),
      ]
    );

    return res.documents.map(normalizePackage);
  } catch (err) {
    console.error("Failed to fetch featured packages", err);
    return [];
  }
}
