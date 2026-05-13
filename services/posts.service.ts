import type { Post } from "@/types/post";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/posts`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function getPostsByUserId(userId: string): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/posts?userId=${userId}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user posts");
  }

  return response.json();
}