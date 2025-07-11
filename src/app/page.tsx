import Banner from "@/components/home/Banner";
import PostList from "@/components/Post/PostList";

export default function Home() {
  return (
    <div className="mx-8">
      <div className="pb-52">
      <Banner />
      </div>
      <div>
      <p className="capitalize font-bold text-lg">latest post</p>
      <PostList />
      </div>
    </div>
  );
}
