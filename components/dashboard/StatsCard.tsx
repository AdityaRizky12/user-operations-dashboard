import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type StatsCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
  description?: string;
};

const StatsCard = ({
  title,
  value,
  icon: Icon,
  description,
}: StatsCardProps) => {
  return (
    <Card className="transition-all hover:shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold sm:text-3xl">{value}</div>

        {description && (
          <p className="mt-1 text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;