import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://dev.to/api/articles");
  return res.json();
}
export async function getSinglePost(id: string): Promise<Post> {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  return res.json();
}
