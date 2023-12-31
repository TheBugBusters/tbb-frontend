"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckForm({ id }: any) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/report/${id}`)}
      className="flex items-center justify-center z-10 cursor-pointer bg-[url('/rounded.png')] bg-no-repeat h-20 w-20 bg-contain "
    >
      <div className="p-2 rounded-full mr-1">
        <Image alt="" className="" src={"/check.png"} width={30} height={30} />
      </div>
    </button>
  );
}
