import type { Todo } from "@/types/todo";

import { CheckCircle2, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TodosSectionProps = {
  todos: Todo[];
};

const TodosSection = ({ todos }: TodosSectionProps) => {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Todos</CardTitle>

        <p className="text-sm text-muted-foreground">
          {completedTodos} completed, {pendingTodos} pending
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        {todos.slice(0, 8).map((todo) => (
          <div
            key={todo.id}
            className="flex items-start justify-between gap-3 rounded-lg border p-3"
          >
            <div className="flex gap-2">
              {todo.completed ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-muted-foreground" />
              ) : (
                <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
              )}

              <p className="line-clamp-2 text-sm">{todo.title}</p>
            </div>

            <Badge variant={todo.completed ? "secondary" : "outline"}>
              {todo.completed ? "Done" : "Pending"}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TodosSection;