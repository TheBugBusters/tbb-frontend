import LoginForm from "@/components/form/login-form";
import { Suspense } from "react";
import LoginButton from "./login-button";

export default function LoginPage() {
  return (
    <div className="mx-10 mt-60 bg-[url('/modal.png')] h-full bg-no-repeat bg-opacity-80 px-10 py-10 sm:mx-auto sm:w-full sm:max-w-lg sm:rounded-lg ">
      <h1 className="mt-6 text-center font-black text-3xl  text-amber-300 opacity-80">
        Aumente as suas habilidades jogando.
      </h1>
      <p className="mt-2 text-center text-sm text-amber-300 opacity-50">
        Evolua seu personagem e aumente suas habilidades.
      </p>
      <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
        <Suspense fallback={<div className="my-2 h-10 w-full rounded-md  " />}>
          <LoginForm />
          <LoginButton />
        </Suspense>
      </div>
    </div>
  );
}
