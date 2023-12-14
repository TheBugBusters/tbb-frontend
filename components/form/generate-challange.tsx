"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useState, useTransition } from "react";

export default function GenerateChallenge() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [ask, setAsk] = useState("");
  const handleGenerateChallenge = useCallback(async () => {
    const data: any = await fetch(`/api/generate`, {
      method: "POST",
      body: JSON.stringify({
        prompt:
          "level 1 douglas visitou a cabana do professor pinpolho e recebeu a seguinte questão em portugues",
      }),
    });
    console.log(data);
    const parseRes = data;
    setAsk(parseRes.ask);
  }, []);

  return (
    <button
      onClick={handleGenerateChallenge}
      className="flex items-center justify-center z-10 cursor-pointer bg-[url('/rounded.png')] bg-no-repeat h-20 w-20 bg-contain "
    >
      Começar
    </button>
  );
}
