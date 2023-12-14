import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Login | The Bug Buster",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen min-h-screen bg-[url('/bg-selva.jpg')] bg-fixed bg-cover ">
      <div className="flex flex-col h-full justify-center py-12 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
