import Link from "next/link";

import type { EnrichedUser } from "@/types/user";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type UserCardProps = {
  user: EnrichedUser;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{user.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Website: {user.website}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Posts: {user.totalPosts}</Badge>
          <Badge variant="secondary">
            Completed: {user.completedTodos}
          </Badge>
          <Badge variant="outline">Pending: {user.pendingTodos}</Badge>
        </div>

        <Button asChild className="w-full" variant="outline">
          <Link href={`/users/${user.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;