"use client";

import ErrorState from "@/components/users/ErrorState";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return <ErrorState reset={reset} />;
}