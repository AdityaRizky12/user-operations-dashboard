"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Failed to load the dashboard. Please try again.
        </p>

        <Button onClick={reset} className="mt-4">
          Try again
        </Button>
      </div>
    </main>
  );
}