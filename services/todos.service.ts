import type { Todo } from "@/types/todo";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(`${BASE_URL}/todos`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}

export async function getTodosByUserId(userId: string): Promise<Todo[]> {
  const response = await fetch(`${BASE_URL}/todos?userId=${userId}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user todos");
  }

  return response.json();
}