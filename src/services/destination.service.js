import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const DATABASES_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const DESTINATION_ID = "destinations";

/* ---------- NORMALIZER (VERY IMPORTANT) ---------- */
function normalizeDestination(doc) {
  return {
    id: doc.$id,
    name: doc.name,
    description: doc.description,
    region: doc.region,
    state: doc.state,
    duration: doc.duration,
    categories: doc.categories ?? [],
    tags: doc.tags ?? [],
    image: doc.images?.[0] || "/placeholder.jpg",
    isFeatured: doc.isFeatured,
  };
}

/* ---------- Get all destinations ---------- */
export async function getAllDestinations() {
  try {
    const res = await databases.listDocuments(
      DATABASES_ID,
      DESTINATION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(50)]
    );

    return res.documents.map(normalizeDestination);
  } catch (error) {
    console.error(error);
    return [];
  }
}

/* ---------- Featured destinations ---------- */
export async function getFeaturedDestination() {
  try {
    const res = await databases.listDocuments(
      DATABASES_ID,
      DESTINATION_ID,
      [Query.equal("isFeatured", true)]
    );

    return res.documents.map(normalizeDestination);
  } catch (error) {
    console.error(error);
    return [];
  }
}

/* ---------- Filter by tag ---------- */
export async function getByTag(tag) {
  console.log(tag)
  try {
    const res = await databases.listDocuments(
      DATABASES_ID,
      DESTINATION_ID,
      [Query.contains("tags", tag)]
    );

    return res.documents.map(normalizeDestination);
  } catch (error) {
    console.error(error);
    return [];
  }
}
