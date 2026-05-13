"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Menu,
  User,
  Settings,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import SidebarContent from "@/components/layout/SidebarContent";

const Navbar = () => {
  return (
    <nav className="border-b bg-background px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64 p-4">
              <div className="mb-8">
                <h2 className="text-xl font-bold">
                  UserOps
                </h2>

                <p className="text-sm text-muted-foreground">
                  Dashboard
                </p>
              </div>

              <SidebarContent />
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5 sm:h-6 sm:w-6" />

            <span className="text-lg font-bold sm:text-xl">
              UserOps
            </span>
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full outline-none">
              <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarFallback>
                  ARR
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex cursor-pointer items-center">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex cursor-pointer items-center">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;