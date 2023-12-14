import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Home | The Bug Buster",
};

export default function ReportLayout({ children }: { children: ReactNode }) {
  
  return (
    <div className="flex flex-col h-screen min-h-screen bg-[url('/bg-selva.jpg')] bg-fixed bg-cover">
      <div className="flex flex-col h-full justify-center sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
