import type { User } from "@/types/user";

import { Mail, Phone, UserRound, Globe } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type UserProfileCardProps = {
  user: User;
};

const UserProfileCard = ({ user }: UserProfileCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{user.name}</CardTitle>
        <p className="text-sm text-muted-foreground">@{user.username}</p>
      </CardHeader>

      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="break-all">{user.email}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{user.phone}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span>{user.website}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <UserRound className="h-4 w-4 text-muted-foreground" />
          <span>User ID: {user.id}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;