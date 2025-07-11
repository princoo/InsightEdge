import { posts } from "./dummyPosts";
import PostCard from "./PostCard";

export default function PostList() {
  return (
    <div className="container mx-auto py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
