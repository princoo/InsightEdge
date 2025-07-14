"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserAvatar() {
  const { data: session } = useSession();
  if (!session || !session.user) return null;
  return (
    <div className="hidden sm:flex items-center gap-2">
      <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray/20">
        <div className="text-xl font-bold text-secondary-text">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name ?? "avatar"}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {session.user?.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>
      <div className="text-secondary-text dark:text-white">
        <p className="text-xs capitalize">{session.user.name}</p>
        <p className="text-xs text-gray-secondary">{session.user.role}</p>
      </div>
    </div>
  );
}
