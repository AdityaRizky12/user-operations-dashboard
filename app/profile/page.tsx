import { Mail, UserRound, BriefcaseBusiness } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Profile
        </h1>

        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          View basic profile information for this dashboard.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg">
                ARR
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-lg font-semibold">
                Aditya Rizky Ramadhan
              </h2>

              <p className="text-sm text-muted-foreground">
                Frontend Engineer Candidate
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UserRound className="h-4 w-4" />
                Full Name
              </div>

              <p className="mt-2 font-medium">
                Aditya Rizky Ramadhan
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                Email
              </div>

              <p className="mt-2 break-all font-medium">
                adityakiong09@gmail.com
              </p>
            </div>

            <div className="rounded-lg border p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BriefcaseBusiness className="h-4 w-4" />
                Role
              </div>

              <p className="mt-2 font-medium">
                Frontend Engineer Candidate
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}