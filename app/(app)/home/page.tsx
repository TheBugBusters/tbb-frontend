import AudioInput from "@/components/audio";
import CheckChallengeForm from "@/components/form/check-challenge";
import CheckForm from "@/components/form/check-form";
import RefreshForm from "@/components/form/refresh-form";
import TchForm from "@/components/form/tch-form";
import Nav from "@/components/nav";
import responses from "@/lib/responses";
import { random } from "@/lib/utils";

export default function HomePage() {
  const getRandom = random(0, 5);
  const question = responses[getRandom];

  return (
    <div className="h-full flex flex-col gap-6 bg-no-repeat bg-opacity-80 px-10">
      <AudioInput autoPlay="true" />
      <Nav />
      <div className="relative flex items-center justify-center py-12">
        <div className="flex items-center justify-center top-0 absolute">
          <TchForm message={question.help} />
          <RefreshForm />
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
