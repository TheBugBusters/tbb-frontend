import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex justify-between top-0 py-4">
      <div className="flex  items-center justify-center gap-2 bg-[url('/button-madeira.png')] w-[250px] bg-no-repeat bg-cover  px-2">
        <div className="flex items-center justify-center ">
          <Image
            alt=""
            className=""
            src={"/rounded.png"}
            width={80}
            height={60}
          />
          <span className="absolute font-extrabold text-amber-500 opacity-90 ">
            7390
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="text-black opacity-70 font-black text-lg">
            Douglas Prado
          </h3>
          <span className="text-black opacity-70 text-xs">5 serie 2023</span>
        </div>
      </div>
    </div>
  );
}
