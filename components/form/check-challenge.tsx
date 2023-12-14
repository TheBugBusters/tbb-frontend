"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
export default function CheckChallengeForm({ question }: any) {
  const [select, setSelect] = useState<string>("");

  return (
    <>
      {question.alternatives.map((alternative: any, idx: number) => (
        <button
          key={`alternative-${idx}`}
          onClick={() => setSelect(alternative.value)}
          className="bg-[url('/bg-wood.avif')] bg-contain rounded-xl shadow-2xl w-1/2 mx-auto"
        >
          <div
            className={classNames(
              select === alternative.value ? "bg-green-500" : "bg-amber-800",
              "flex items-center gap-5 p-3 opacity-80 border-4 border-amber-900 border-opacity-75 rounded-xl text-black "
            )}
          >
            <Image
              alt=""
              className=""
              src={
                select === alternative.value
                  ? "/checkpoint-fill.png"
                  : "/checkpoint.png"
              }
              width={60}
              height={60}
            />
            <span className="text-xs font-black">{alternative.label}</span>
          </div>
        </button>
      ))}
    </>
  );
}
