"use client";

import { GraduationCap } from "lucide-react";

export default function TchForm({ message }: any) {
  return (
    <button
      onClick={() => alert(message)}
      className="flex items-center justify-center z-10 cursor-pointer text-amber-400  bg-[url('/rounded.png')] bg-no-repeat h-20 w-20 bg-contain "
    >
      <span className="text-xl font-bold">
        <GraduationCap strokeWidth={2} size={32} className="shadow-lg" />
      </span>
      <div className="px-3 rounded-lg shadow text-amber-900 bg-amber-300 absolute bottom-0">
        -10
      </div>
    </button>
  );
}
