import { Post } from "@/types/post";
import Image from "next/image";
import ImageContainer from "../ui/ImageContainer";
import { formatToReadableDate } from "@/app/lib/utils/dateFormat";
// import collin from "/collin.jpg"
export default function Banner({ post }: { post: Post }) {
  return (
    <div className="relative h-96 bg-cyan-100 rounded-2xl mt-10">
      <ImageContainer
        src={post.cover_image}
        alt={post.title}
        fill={true}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="bg-white dark:bg-secondary dark:text-white absolute bottom-0 sm:left-20 transform translate-y-1/2 p-5 sm:max-w-[500px] rounded-lg shadow-lg border border-transparent dark:border-gray/20">
        <div className="flex gap-2 flex-wrap">
          {post.tag_list.map((tag) => (
            <p
              key={tag}
              className="bg-blue px-2 inline-block py-1 rounded-lg text-xs text-white capitalize"
            >
              {tag}
            </p>
          ))}
        </div>

        <h2 className="text-2xl font-bold my-5">{post.title}</h2>
        <div className="flex gap-3">
          <Image
            src={post.user.profile_image}
            width={30}
            height={30}
            alt={post.user.name}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col text-xs">
            <p className="capitalize text-secondary-text font-bold">
              {post.user.name}
            </p>
            <p className="text-secondary-text">
              {formatToReadableDate(post.published_timestamp)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
