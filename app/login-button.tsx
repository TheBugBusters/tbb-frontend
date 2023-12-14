"use client";

import LoadingDots from "@/components/icons/loading-dots";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  return (
    <button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        router.push('/home')
      }}
      className={`${
        loading
          ? "cursor-not-allowed "
          : ""
      } group my-2 flex relative w-full items-center justify-center space-x-2 rounded-md  transition-colors duration-75 focus:outline-none`}
    >
      {loading ? (
        <LoadingDots color="#A8A29E" />
      ) : (
        <div className="flex items-center justify-center">
          <Image className="" alt="" src={'./button-madeira.png'} width={440} height={20} />
          <p className="absolute mb-3 ml-3 w-full opacity-80 text-2xl font-black text-amber-300">
            Fazer login
          </p>
        </div>
      )}
    </button>
  );
}
