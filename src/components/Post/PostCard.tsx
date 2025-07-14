import React from "react";
import ImageContainer from "../ui/ImageContainer";
import Link from "next/link";
import { Post } from "@/types/post";
import { formatToReadableDate } from "@/app/lib/utils/dateFormat";
import Image from "next/image";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      key={post.id}
      className="bg-white dark:bg-secondary dark:text-white rounded-lg p-2  border border-gray-300 dark:border-gray/20 overflow-hidden hover:shadow-xs"
    >
      <div className="relative">
        <ImageContainer
          src={post.cover_image}
          alt={post.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      <div className="p-6">
        <div className="flex gap-2  flex-wrap">
          {post.tag_list.map((tag) => (
            <span
              key={tag}
              className="bg-blue/20 text-blue px-2 py-1 rounded-lg text-xs capitalize"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-semibold my-4 line-clamp-2 leading-tight">
          {post.title}
        </h2>

        <div className="flex items-center gap-3">
          <Image
            src={post.user.profile_image}
            alt={post.user.name}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col md:flex-row gap-5">
            <span className="text-sm font-medium text-secondary-text">
              {post.user.name}
            </span>
            <span className="text-sm text-secondary-text">
              {formatToReadableDate(post.published_at)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
