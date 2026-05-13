import type { EnrichedUser } from "@/types/user";

export function filterUsersBySearch(
  users: EnrichedUser[],
  search: string
): EnrichedUser[] {
  const keyword = search.trim().toLowerCase();

  if (!keyword) {
    return users;
  }

  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword)
    );
  });
}

export function filterHighPendingUsers(
  users: EnrichedUser[],
  isEnabled: boolean
): EnrichedUser[] {
  if (!isEnabled) {
    return users;
  }

  return users.filter((user) => user.pendingTodos >= 12);
}