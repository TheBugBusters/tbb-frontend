"use client";

import { useParams, useRouter } from "next/navigation";

export default function LoginForm() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  return (
    <input
      name="confirm"
      type="text"
      required
      className="w-full p-4  max-w-md rounded-md border-4 border-amber-700 bg-amber-900 text-sm text-white placeholder-amber-800 focus:border-amber-900 focus:outline-none focus:ring-amber-500 "
    />
  );
}
