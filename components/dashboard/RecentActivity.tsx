import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Users,
} from "lucide-react";

import { getPosts } from "@/services/posts.service";
import { getTodos } from "@/services/todos.service";
import { getUsers } from "@/services/users.service";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RecentActivity = async () => {
  const [users, posts, todos] = await Promise.all([
    getUsers(),
    getPosts(),
    getTodos(),
  ]);

  const latestUsers = users.slice(0, 3);
  const latestPosts = posts.slice(0, 3);
  const pendingTodos = todos.filter((todo) => !todo.completed).slice(0, 3);
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
   <section className="grid items-start gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div>
            <CardTitle className="text-lg">
              Recent Users
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Latest users from the API.
            </p>
          </div>

          <Users className="h-5 w-5 text-muted-foreground" />
        </CardHeader>

        <CardContent className="space-y-4">
          {latestUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between gap-4 rounded-lg border p-3"
            >
              <div className="min-w-0">
                <p className="truncate font-medium">
                  {user.name}
                </p>
                <p className="truncate text-sm text-muted-foreground">
                  {user.email}
                </p>
              </div>

              <Badge variant="secondary">
                User
              </Badge>
            </div>
          ))}

          <Button asChild variant="outline" className="w-full">
            <Link href="/users">
              View all users
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div>
            <CardTitle className="text-lg">
              Operations Summary
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Quick overview of posts and todos.
            </p>
          </div>

          <FileText className="h-5 w-5 text-muted-foreground" />
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4" />
                Completed Todos
              </div>

              <p className="mt-2 text-2xl font-bold">
                {completedTodos}
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Pending Preview
              </div>

              <p className="mt-2 text-2xl font-bold">
                {pendingTodos.length}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {pendingTodos.map((todo) => (
              <div
                key={todo.id}
                className="rounded-lg border p-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="line-clamp-2 text-sm">
                    {todo.title}
                  </p>

                  <Badge variant="outline">
                    Pending
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">
              Latest Posts
            </p>

            {latestPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg border p-3"
              >
                <p className="line-clamp-1 text-sm font-medium">
                  {post.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RecentActivity;