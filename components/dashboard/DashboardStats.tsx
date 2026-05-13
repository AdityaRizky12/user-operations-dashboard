import {
  CheckCircle2,
  Clock,
  FileText,
  Users,
} from "lucide-react";

import { getPosts } from "@/services/posts.service";
import { getTodos } from "@/services/todos.service";
import { getUsers } from "@/services/users.service";

import StatsCard from "./StatsCard";

const DashboardStats = async () => {
  const [users, posts, todos] = await Promise.all([
    getUsers(),
    getPosts(),
    getTodos(),
  ]);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Total Users"
        value={users.length}
        icon={Users}
        description="Registered users"
      />

      <StatsCard
        title="Total Posts"
        value={posts.length}
        icon={FileText}
        description="Published posts"
      />

      <StatsCard
        title="Completed Todos"
        value={completedTodos}
        icon={CheckCircle2}
        description="Finished tasks"
      />

      <StatsCard
        title="Pending Todos"
        value={pendingTodos}
        icon={Clock}
        description="Tasks still pending"
      />
    </section>
  );
};

export default DashboardStats;