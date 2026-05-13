import type { User } from "@/types/user";

import { Building2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CompanySectionProps = {
  company: User["company"];
};

const CompanySection = ({ company }: CompanySectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Building2 className="h-5 w-5" />
          Company
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="font-medium">{company.name}</p>
        <p className="text-sm text-muted-foreground">{company.catchPhrase}</p>
      </CardContent>
    </Card>
  );
};

export default CompanySection;