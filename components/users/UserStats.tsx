import type { EnrichedUser } from "@/types/user";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type UserStatsProps = {
  users: EnrichedUser[];
};

const UserStats = ({ users }: UserStatsProps) => {
  const totalPosts = users.reduce((total, user) => total + user.totalPosts, 0);
  const completedTodos = users.reduce(
    (total, user) => total + user.completedTodos,
    0
  );
  const pendingTodos = users.reduce(
    (total, user) => total + user.pendingTodos,
    0
  );

  const stats = [
    {
      title: "Total Users",
      value: users.length,
    },
    {
      title: "Total Posts",
      value: totalPosts,
    },
    {
      title: "Completed Todos",
      value: completedTodos,
    },
    {
      title: "Pending Todos",
      value: pendingTodos,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserStats;