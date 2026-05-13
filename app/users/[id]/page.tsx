import { notFound } from "next/navigation";

import BackButton from "@/components/user-details/BackButton";
import AddressSection from "@/components/user-details/AddressSection";
import CompanySection from "@/components/user-details/CompanySection";
import PostsSection from "@/components/user-details/PostsSection";
import TodosSection from "@/components/user-details/TodosSection";
import UserProfileCard from "@/components/user-details/UserProfileCard";

import { getPostsByUserId } from "@/services/posts.service";
import { getTodosByUserId } from "@/services/todos.service";
import { getUserById } from "@/services/users.service";

type UserDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: UserDetailsPageProps) {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `${user.name} | User Operations Dashboard`,
    description: `View details, posts, and todos for ${user.name}.`,
  };
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user) {
    notFound();
  }

  const [posts, todos] = await Promise.all([
    getPostsByUserId(id),
    getTodosByUserId(id),
  ]);

  return (
    <main className="space-y-6">
      <BackButton />

      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          User Details
        </h1>

        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          View user profile, company, address, posts, and todos.
        </p>
      </div>

      <UserProfileCard user={user} />

      <div className="grid gap-4 lg:grid-cols-2">
        <CompanySection company={user.company} />
        <AddressSection address={user.address} />
      </div>

      <div className="grid items-start gap-4 xl:grid-cols-2">
        <PostsSection posts={posts} />
        <TodosSection todos={todos} />
      </div>
    </main>
  );
}