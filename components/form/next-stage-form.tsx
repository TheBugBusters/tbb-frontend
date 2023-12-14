"use client";

import { useParams, useRouter } from "next/navigation";

export default function NextStageForm() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/home");
        router.refresh();
      }}
      className="bg-[url('/bg-wood.avif')] px-12 py-4 bg-contain flex items-center gap-5 bg-amber-800 opacity-80 border-4 border-amber-900 border-opacity-75 rounded-xl text-black cursor-pointer"
    >
      <span className="text-xl font-black opacity-70">
        Ir para próxima fase
      </span>
    </button>
  );
}
