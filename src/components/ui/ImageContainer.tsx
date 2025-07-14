import { ImageContainerProps } from "@/types/imageContainer";
import { shimmer, toBase64 } from "@/app/lib/utils/Shimmer";
import Image from "next/image";
import React from "react";

export default function ImageContainer({
  src,
  alt,
  width,
  height,
  className,
  fill,
  sizez,
  priority
}: ImageContainerProps) {
  return (
    <Image
      src={src || "/placeholder.png"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      fill={fill}
      priority={priority}
      sizes={sizez}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1200, 600))}`}
    />
  );
}
