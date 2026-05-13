import type { EnrichedUser } from "@/types/user";

export type SortOption = "name-asc" | "most-pending";

export function sortUsers(
  users: EnrichedUser[],
  sortBy: SortOption
): EnrichedUser[] {
  if (sortBy === "name-asc") {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "most-pending") {
    return [...users].sort((a, b) => b.pendingTodos - a.pendingTodos);
  }

  return users;
}