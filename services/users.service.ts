import type { User } from "@/types/user";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/users`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export async function getUserById(userId: string): Promise<User | null> {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const user = await response.json();

  if (!user || Object.keys(user).length === 0) {
    return null;
  }

  return user;
}