import UsersClient from "@/components/users/UsersClient";
import { getPosts } from "@/services/posts.service";
import { getTodos } from "@/services/todos.service";
import { getUsers } from "@/services/users.service";
import { enrichUsers } from "@/utils/enrich-users";

export default async function UsersPage() {
  const [users, posts, todos] = await Promise.all([
    getUsers(),
    getPosts(),
    getTodos(),
  ]);

  const enrichedUsers = enrichUsers(users, posts, todos);

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Users
        </h1>

        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          Manage users and monitor their posts and todos activity.
        </p>
      </div>

      <UsersClient users={enrichedUsers} />
    </main>
  );
}