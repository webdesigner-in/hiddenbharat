import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const STORIES_COLLECTION_ID = "stories";

function normalizeStory(doc) {
  return {
    id: doc.$id,
    title: doc.title,
    excerpt: doc.excerpt,
    image: doc.images?.[0] || "/placeholder.jpg",
    votes: doc.votes ?? 0,
    trending: doc.isTrending,
    slug: doc.slug,
  };
}

export async function getAllStories(limit = 20) {
  try {
    const res = await databases.listDocuments(
      DATABASE_ID,
      STORIES_COLLECTION_ID,
      [
        Query.equal("published", true),
        Query.orderDesc("$createdAt"),
        Query.limit(limit),
      ]
    );
    return res.documents.map(normalizeStory);
  } catch (error) {
    console.error(`Faliled to fetch Stories ${error}`);
    return [];
  }
}

export async function getTrendingStories(limit = 3) {
  try {
    const res = await databases.listDocuments(
      DATABASE_ID,
      STORIES_COLLECTION_ID,
      [
        Query.equal("published", true),
        Query.equal("isTrending", true),
        Query.orderDesc("votes"),
        Query.limit(limit),
      ]
    );
    return res.documents.map(normalizeStory);
  } catch (error) {
    console.error(`Failed To fetch Tredning Stories ${error}`);
    return [];
  }
}


export async function getStoryBySlug(slug) {
  try {
    const res = await databases.listDocuments(
      DATABASE_ID,
      STORIES_COLLECTION_ID,
      [
        Query.equal("slug", slug),
        Query.equal("published", true),
        Query.limit(1),
      ]
    );

    if (!res.documents.length) return null;

    const doc = res.documents[0];

    return {
      id: doc.$id,
      title: doc.title,
      excerpt: doc.excerpt,
      content: doc.content,
      image: doc.images,
      votes: doc.votes ?? 0,
      slug: doc.slug,
    };
  } catch (err) {
    console.error("Failed to fetch story", err);
    return null;
  }
}