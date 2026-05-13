import Link from "next/link";

import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentActivity from "@/components/dashboard/RecentActivity";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Dashboard Overview
          </h1>

          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Monitor users, posts, and todos activity in one place.
          </p>
        </div>

        <Button asChild className="w-full sm:w-auto">
          <Link href="/users">
            View Users
          </Link>
        </Button>
      </div>

      <DashboardStats />

      <RecentActivity />
    </main>
  );
}