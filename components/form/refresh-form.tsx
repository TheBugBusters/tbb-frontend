"use client";

import { RotateCw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RefreshForm() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.refresh()}
      className="flex items-center justify-center z-10 cursor-pointer text-amber-400  bg-[url('/rounded.png')] bg-no-repeat h-20 w-20 bg-contain "
    >
      <span className="text-xl font-bold">
        <RotateCw strokeWidth={3} className="shadow-lg" />
      </span>
      <div className="px-3 rounded-lg shadow text-amber-900 bg-amber-300 absolute bottom-0">
        -30
      </div>
    </button>
  );
}
