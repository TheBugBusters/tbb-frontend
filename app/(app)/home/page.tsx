import AudioInput from "@/components/audio";
import CheckChallengeForm from "@/components/form/check-challenge";
import CheckForm from "@/components/form/check-form";
import Nav from "@/components/nav";
import responses from "@/lib/responses";
import { random } from "@/lib/utils";
import { GraduationCap, RotateCw } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const getRandom = random(0, 5);
  const question = responses[getRandom];
  return (
    <div className="h-full flex flex-col gap-6 bg-no-repeat bg-opacity-80 px-10">
      <AudioInput autoPlay="false" />
      <Nav />
      <div className="relative flex items-center justify-center py-12">
        <div className="flex items-center justify-center top-0 absolute">
          <div className="flex items-center justify-center z-10 cursor-pointer text-amber-400 bg-[url('/rounded.png')] bg-no-repeat h-20 w-20 bg-contain ">
            <span className="text-xl font-bold">
              <GraduationCap strokeWidth={2} size={32} className="shadow-lg" />
            </span>
            <div className="px-3 rounded-lg shadow text-amber-900 bg-amber-300 absolute bottom-0">
              -10
            </div>
          </div>
          <div className="flex items-center justify-center z-10 cursor-pointer text-amber-400  bg-[url('/rounded.png')] bg-no-repeat h-20 w-20 bg-contain ">
            <span className="text-xl font-bold">
              <RotateCw strokeWidth={3} className="shadow-lg" />
            </span>
            <div className="px-3 rounded-lg shadow text-amber-900 bg-amber-300 absolute bottom-0">
              -30
            </div>
          </div>
          <div className="flex items-center justify-center z-10 cursor-pointer bg-[url('/rounded.png')] bg-no-repeat h-20 w-20 bg-contain ">
            <div className=" p-2 rounded-full mr-1">
              <Image
                alt=""
                className=""
                src={"/close.png"}
                width={30}
                height={30}
              />
            </div>
          </div>
          <CheckForm id={getRandom} />
        </div>

        <div className="bg-[url('/bg-wood.avif')] bg-contain rounded-xl shadow-2xl">
          <div className="  bg-amber-800 p-6 opacity-80 border-4 border-amber-900 border-opacity-75 rounded-xl ">
            <h1 className="text-black opacity-70 text-xl font-bold pt-6 px-6">
              Pergunta de {question.type} nível {question.level}
            </h1>
            <p className="text-black opacity-70 text-lg font-medium p-6">
              {question.ask}
            </p>
          </div>
        </div>
      </div>

      <CheckChallengeForm question={question} />
    </div>
  );
}
