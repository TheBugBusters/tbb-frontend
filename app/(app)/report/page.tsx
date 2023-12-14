import AudioInput from "@/components/audio";
import NextStageForm from "@/components/form/next-stage-form";
import Nav from "@/components/nav";
import { Star } from "lucide-react";

export default function ReportPage() {
  return (
    <div className="h-full flex flex-col gap-6 bg-no-repeat bg-opacity-80 px-10">
      <AudioInput autoPlay="false" />
      <Nav />
      <div className="relative flex items-center justify-center py-12">
        <div className="bg-[url('/bg-wood.avif')] bg-contain rounded-xl shadow-2xl">
          <div className="flex flex-col justify-center items-center bg-amber-400 p-6 opacity-80 border-4 border-amber-500 border-opacity-75 rounded-xl ">
            <div className="flex gap-3">
              <Star size={32} strokeWidth={3} className="text-amber-900" />
              <Star size={64} strokeWidth={3} className="text-amber-900" />
              <Star size={32} strokeWidth={3} className="text-amber-900" />
            </div>
            <h1 className="text-black opacity-70 text-xl font-bold pt-6 px-6">
              Eba! Você evoluiu para o nível 3 em matemática
            </h1>
            <div className="flex flex-col items-center px-12 justify-center w-full py-12 gap-5">
              <div className="flex w-full justify-center items-center gap-3">
                <span className="w-[250px] text-xs">Leitura</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-amber-900 h-4 rounded-full"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <span className="w-[250px] text-xs text-right">
                  2400/4000 estrelas
                </span>
              </div>

              <div className="flex w-full justify-center items-center gap-3">
                <span className="text-xs w-[250px] ">Matemática</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-amber-900 h-4 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <span className="w-[250px] text-xs text-right">
                  1500/4000 estrelas
                </span>
              </div>

              <div className="flex w-full justify-center items-center gap-3">
                <span className="w-[250px] text-xs">Ciencias</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-amber-900 h-4 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <span className="w-[250px] text-xs text-right">
                  3490/4000 estrelas
                </span>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <h1 className="text-black opacity-70 text-3xl font-bold pt-6 px-6">
                  Pra você continuar evoluindo você terá um novo desafio!
                </h1>
                <p className="text-black text-center opacity-70 text-lg font-medium p-6">
                  Um dia, enquanto explorava a Floresta Gramatical, Douglas
                  deparou-se com um desafio único proposto pelo guardião da
                  sintaxe, um sábio erudito chamado Prof. Gramáticus. Prof.
                  Gramáticus estava guardando um antigo artefato linguístico
                  conhecido como {"Orbe Lexical"}, que continha o poder de
                  desbloquear novos níveis de conhecimento linguístico. Para
                  provar-se digno de possuir o Orbe Lexical, Douglas Palavrinha
                  teria que superar uma série de desafios gramaticais e vencer
                  monstros de confusão verbal. A primeira tarefa era enfrentar o
                  Temível Dragão da Concordância Nominal, cujas chamas ardiam
                  cada vez que um adjetivo e um substantivo discordavam.
                </p>
                <NextStageForm />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
