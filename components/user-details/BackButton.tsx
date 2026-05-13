import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const BackButton = () => {
  return (
    <Button asChild variant="outline" size="sm">
      <Link href="/users">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to users
      </Link>
    </Button>
  );
};

export default BackButton;