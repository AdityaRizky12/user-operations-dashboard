import { ChevronDown } from "lucide-react";

import type { SortOption } from "@/utils/sort";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

const sortLabels: Record<SortOption, string> = {
  "name-asc": "Name A-Z",
  "most-pending": "Most Pending",
};

const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-10 w-full justify-between lg:w-[180px]"
        >
          {sortLabels[value]}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[180px]">
        <DropdownMenuItem onClick={() => onChange("name-asc")}>
          Name A-Z
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onChange("most-pending")}>
          Most Pending
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;