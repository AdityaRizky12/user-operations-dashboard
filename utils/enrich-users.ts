import type { Post } from "@/types/post";
import type { Todo } from "@/types/todo";
import type { EnrichedUser, User } from "@/types/user";

export function enrichUsers(
  users: User[],
  posts: Post[],
  todos: Todo[]
): EnrichedUser[] {
  return users.map((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    const userTodos = todos.filter((todo) => todo.userId === user.id);

    return {
      ...user,
      totalPosts: userPosts.length,
      completedTodos: userTodos.filter((todo) => todo.completed).length,
      pendingTodos: userTodos.filter((todo) => !todo.completed).length,
    };
  });
}