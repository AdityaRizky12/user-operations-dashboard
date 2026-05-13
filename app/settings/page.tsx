import { Database, Palette, Settings, TestTube2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Settings
        </h1>

        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          Manage dashboard preferences and application information.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Dashboard Preferences
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Palette className="h-4 w-4" />
                Theme
              </div>
              <p className="mt-2 font-medium">System default</p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Dashboard Mode
              </p>
              <p className="mt-2 font-medium">User Operations</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="h-4 w-4" />
                Data Source
              </div>
              <p className="mt-2 font-medium">JSONPlaceholder API</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube2 className="h-5 w-5" />
              Application Info
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Framework
              </p>
              <p className="mt-2 font-medium">Next.js + TypeScript</p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Styling
              </p>
              <p className="mt-2 font-medium">
                Tailwind CSS + shadcn/ui
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">
                Testing
              </p>
              <p className="mt-2 font-medium">
                Jest + React Testing Library
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}