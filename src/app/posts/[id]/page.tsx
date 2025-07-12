import { getPosts, getSinglePost } from "@/app/lib/posts";
import { formatToReadableDate } from "@/app/lib/utils/dateFormat";
import {
  decodeUnicodeEscapes,
  sanitizeHtml,
} from "@/app/lib/utils/stringFormat";
import RevalidateButton from "@/components/RevalidateButton";
import ImageContainer from "@/components/ui/ImageContainer";
import Image from "next/image";
import React from "react";

export const revalidate = 15;
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
export default async function SignlePost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getSinglePost(id);
  const decoded = decodeUnicodeEscapes(post.body_html || "");
  const sanitized = sanitizeHtml(decoded);
  // const decodedBody = JSON.parse(JSON.stringify(post.body_html || ""));
  return (
    <div className="w-2/3 mx-auto py-10">
      <div className="flex gap-2 flex-wrap">
        {typeof post.tags !== "string" &&
          post.tags.map((tag) => (
            <p
              key={tag}
              className="bg-blue px-2 inline-block py-1 rounded-lg text-xs text-white capitalize"
            >
              {tag}
            </p>
          ))}
      </div>
      <h1 className="font-bold text-2xl my-2 dark:text-white">{post.title}</h1>
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-3 items-center">
          <Image
            src={post.user.profile_image}
            alt={post.user.name}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col md:flex-row gap-5">
            <span className="text-sm font-medium text-secondary-text capitalize">
              {post.user.name}
            </span>
            <span className="text-sm text-secondary-text">
              {formatToReadableDate(post.published_timestamp)}
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs text-secondary-text mb-2">
            <span className="font-bold">Last Regeneration:</span>{" "}
            <span className="underline">{new Date().toLocaleString()}</span>
          </p>
          <RevalidateButton id={post.id.toString()} />
        </div>
      </div>
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden my-5">
        <ImageContainer
          src={post.cover_image}
          alt={post.title}
          fill={true}
          sizez="100vw"
          className="object-cover"
        />
      </div>
      <p
        className="prose dark:text-white"
        dangerouslySetInnerHTML={{ __html: sanitized }}
      />
    </div>
  );
}
