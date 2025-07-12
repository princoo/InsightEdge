/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Button from "./ui/Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RevalidateButton({ id }: { id: string }) {
  const [isRevalidating, setIsRevalidating] = useState(false);
  const router = useRouter();
  const handleRevalidate = async () => {
    setIsRevalidating(true);

    try {
      const response = await fetch(`/api/revalidate?path=/posts/${id}`);
      const data = await response.json();
      if (response.ok) {
        toast.success(
          `Page revalidated on ${new Date(data.timestamp).toLocaleString()}`
        );

        router.refresh();
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      toast.error(
        `Failed to revalidate the page. ${
          error.message || ""
        }. Please try again.`
      );
    } finally {
      setIsRevalidating(false);
    }
  };

  return (
    <Button
      onClick={handleRevalidate}
      disabled={isRevalidating}
      size="small"
      variant="primary"
    >
      {isRevalidating ? "Revalidating..." : "Refresh Content"}
    </Button>
  );
}
