import Link from "next/link";

import {
  LayoutDashboard,
  Users,
  Settings,
} from "lucide-react";

const SidebarContent = () => {
  return (
    <div className="space-y-2">

      <Link
        href="/"
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted">
        <LayoutDashboard className="h-4 w-4" />
        Overview
      </Link>

      <Link
        href="/users"
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted">
        <Users className="h-4 w-4" />
        Users
      </Link>

      <Link
        href="/settings"
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted">
        <Settings className="h-4 w-4" />
        Settings
      </Link>
    </div>
  );
};

export default SidebarContent;