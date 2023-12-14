"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export default function CheckChallengeForm() {
  const [select, setSelect] = useState<string>("");
  return (
    <>
      <button
        onClick={() => setSelect("A")}
        className="bg-[url('/bg-wood.avif')] bg-contain rounded-xl shadow-2xl w-1/2 mx-auto"
      >
        <div
          className={classNames(
            select === "A" ? "bg-green-500" : "bg-amber-800",
            "flex items-center gap-5 p-3 opacity-80 border-4 border-amber-900 border-opacity-75 rounded-xl text-black "
          )}
        >
          <Image
            alt=""
            className=""
            src={select === "A" ? "/checkpoint-fill.png" : "/checkpoint.png"}
            width={60}
            height={60}
          />
          <span className="text-xl font-black">{"está"}</span>
        </div>
      </button>
      <button
        onClick={() => setSelect("B")}
        className="bg-[url('/bg-wood.avif')] bg-contain rounded-xl shadow-2xl w-1/2 mx-auto"
      >
        <div
          className={classNames(
            select === "B" ? "bg-green-500" : "bg-amber-800",
            "flex items-center gap-5 p-3 opacity-80 border-4 border-amber-900 border-opacity-75 rounded-xl text-black "
          )}
        >
          <Image
            alt=""
            className=""
            src={select === "B" ? "/checkpoint-fill.png" : "/checkpoint.png"}
            width={60}
            height={60}
          />
          <span className="text-xl font-black">{"estavam"}</span>
        </div>
      </button>
      <button
        onClick={() => setSelect("C")}
        className="bg-[url('/bg-wood.avif')] bg-contain rounded-xl shadow-2xl w-1/2 mx-auto"
      >
        <div
          className={classNames(
            select === "C" ? "bg-green-500" : "bg-amber-800",
            "flex items-center gap-5 p-3 opacity-80 border-4 border-amber-900 border-opacity-75 rounded-xl text-black"
          )}
        >
          <Image
            alt=""
            className=""
            src={select === "C" ? "/checkpoint-fill.png" : "/checkpoint.png"}
            width={60}
            height={60}
          />
          <span className="text-xl font-black">{"estávam"}</span>
        </div>
      </button>
      <button
        onClick={() => setSelect("D")}
        className="bg-[url('/bg-wood.avif')] bg-contain rounded-xl shadow-2xl w-1/2 mx-auto"
      >
        <div
          className={classNames(
            select === "D" ? "bg-green-500" : "bg-amber-800",
            "flex items-center gap-5 p-3 opacity-80 border-4 border-amber-900 border-opacity-75 rounded-xl text-black "
          )}
        >
          <Image
            alt=""
            className=""
            src={select === "D" ? "/checkpoint-fill.png" : "/checkpoint.png"}
            width={60}
            height={60}
          />
          <span className="text-xl font-black">{"estão"}</span>
        </div>
      </button>
    </>
  );
}
