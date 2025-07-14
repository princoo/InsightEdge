import { getSinglePost } from "@/app/lib/posts";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const post = await getSinglePost(id);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://insight-edge.netlify.app/posts/${id}`,
      type: "article",
      images: [
        {
          url: post.cover_image,
        },
      ],
    },
  };
}
export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
