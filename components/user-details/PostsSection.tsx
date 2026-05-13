import type { Post } from "@/types/post";

import { FileText } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PostsSectionProps = {
  posts: Post[];
};

const PostsSection = ({ posts }: PostsSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <FileText className="h-5 w-5" />
          Posts
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Showing {posts.length} posts from this user.
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className="rounded-lg border p-4">
            <h3 className="line-clamp-1 font-medium">{post.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {post.body}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PostsSection;