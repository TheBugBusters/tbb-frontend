"use client";

import { useCompletion } from "ai/react";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useState, useTransition } from "react";

export default function GenerateChallenge() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [ask, setAsk] = useState("");
  const [streamedData, setStreamedData] = useState("");
  const { completion, input, handleInputChange, handleSubmit, error } =
    useCompletion();

  const handleGenerateChallenge = useCallback(async () => {
    const data: any = await fetch(`/api/generate`, {
      method: "POST",
      body: JSON.stringify({
        level: 5,
        competition: "portugues",
        name: "Douglas",
      }),
    });
    console.log(data, "data");
  }, []);

  return (
    <>
      {completion}
      {/* <button
        onClick={handleGenerateChallenge}
        className="flex items-center justify-center z-10 cursor-pointer bg-[url('/rounded.png')] bg-no-repeat h-20 w-20 bg-contain "
      >
        Começar
      </button> */}
    </>
  );
}
