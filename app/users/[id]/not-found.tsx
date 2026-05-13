import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UserNotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">User not found</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          The user you are looking for does not exist.
        </p>

        <Button asChild className="mt-4">
          <Link href="/users">Back to users</Link>
        </Button>
      </div>
    </main>
  );
}