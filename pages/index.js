import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black bg-image px-10 h-screen w-full justify-center items-center flex relative">
      {/* <img src="/assets/bh_white.png" className="absolute opacity-20" /> */}
      <div className="flex flex-col">
        <span className="pb-4 gradient-text md:text-8xl  font-bold text-center md:tracking-[-7px] text-6xl tracking-[-3px]">
          Get Ready for a Spectacular Arrival!
        </span>
        <div className="flex flex-row items-center justify-center"></div>
      </div>
    </main>
  );
}
