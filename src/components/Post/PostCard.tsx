/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ImageContainer from "../ui/ImageContainer";
import Link from "next/link";

export default function PostCard({ post }: any) {
  return (
    <Link href={`/posts/${post.id}`}>
      <article
        key={post.id}
        className="bg-white rounded-lg p-2  border border-gray-300 overflow-hidden hover:shadow-xs"
      >
        <div className="relative">
          <ImageContainer
            src={post.image}
            alt={post.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <div className="p-6">
          <p className="bg-blue/20 text-blue px-2 py-1 rounded-lg max-w-20 text-xs">
            {post.category}
          </p>
          <h2 className="text-lg font-semibold my-4 line-clamp-2 leading-tight">
            {post.title}
          </h2>

          <div className="flex items-center gap-3">
            <ImageContainer
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col md:flex-row gap-5">
              <span className="text-sm font-medium text-secondary-text">
                {post.author.name}
              </span>
              <span className="text-sm text-secondary-text">{post.date}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
