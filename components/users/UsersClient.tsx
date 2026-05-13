"use client";

import { useMemo, useState } from "react";

import type { EnrichedUser } from "@/types/user";

import { filterHighPendingUsers, filterUsersBySearch } from "@/utils/filters";
import { sortUsers, type SortOption } from "@/utils/sort";

import EmptyState from "./EmptyState";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import UserCard from "./UserCard";
import UserStats from "./UserStats";
import UsersTable from "./UsersTable";

type UsersClientProps = {
  users: EnrichedUser[];
};

const UsersClient = ({ users }: UsersClientProps) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");
  const [highPendingOnly, setHighPendingOnly] = useState(false);

  const filteredUsers = useMemo(() => {
    const searchedUsers = filterUsersBySearch(users, search);

    const filteredByPending = filterHighPendingUsers(
      searchedUsers,
      highPendingOnly
    );

    return sortUsers(filteredByPending, sortBy);
  }, [users, search, sortBy, highPendingOnly]);

  return (
    <section className="space-y-6">
      <UserStats users={users} />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <SearchBar value={search} onChange={setSearch} />

        <div className="grid w-full gap-2 sm:grid-cols-2 lg:w-auto lg:flex">
          <SortDropdown value={sortBy} onChange={setSortBy} />

          <FilterBar
            pendingOnly={highPendingOnly}
            onPendingOnlyChange={setHighPendingOnly}
          />
        </div>
      </div>

      {filteredUsers.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="hidden md:block">
            <UsersTable users={filteredUsers} />
          </div>

          <div className="grid gap-4 md:hidden">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default UsersClient;