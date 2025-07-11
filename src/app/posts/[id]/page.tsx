import ImageContainer from "@/components/ui/ImageContainer";
import React from "react";

export default function SignlePost() {
  return (
    <div className="w-2/3 mx-auto py-10">
      <p className="bg-blue px-2 py-1 rounded-lg max-w-20 text-xs text-white">
        Technology
      </p>
      <h1 className="font-bold text-2xl my-2">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <div className="flex items-center gap-3">
        <ImageContainer
          src="https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3%2F13d3b32a-d381-4549-b95e-ec665768ce8f.png"
          alt="profile"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col md:flex-row gap-5">
          <span className="text-sm font-medium text-secondary-text">
            Trancey Smith
          </span>
          <span className="text-sm text-secondary-text">August 10, 2023</span>
        </div>
      </div>
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden my-5">
        <ImageContainer
          src="/collin.jpg"
          alt="profile"
          fill={true}
          sizez="100vw"
          className="object-cover"
        />
      </div>
      <p className="text-secondary-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facere
        accusantium sunt nobis officia deleniti assumenda libero porro
        molestiae? Harum.
      </p>
    </div>
  );
}
