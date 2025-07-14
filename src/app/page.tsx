import Banner from "@/components/home/Banner";
import PostList from "@/components/Post/PostList";
import { getPosts } from "./lib/posts";

export default async function Home() {
  const posts = await getPosts()
  return (
    <div className="mx-8">
      <div className="pb-64 sm:pb-52">
      <Banner post={posts[0]}/>
      </div>
      <div>
      <p className="capitalize font-bold text-lg dark:text-white">latest post</p>
      <PostList posts={posts}/>
      </div>
    </div>
  );
}
