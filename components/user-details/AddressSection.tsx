import type { User } from "@/types/user";

import { MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AddressSectionProps = {
  address: User["address"];
};

const AddressSection = ({ address }: AddressSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <MapPin className="h-5 w-5" />
          Address
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>
          {address.city}, {address.zipcode}
        </p>
      </CardContent>
    </Card>
  );
};

export default AddressSection;