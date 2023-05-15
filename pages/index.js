import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black h-screen w-full justify-center items-center flex relative">
      {/* <img src="/assets/bh_white.png" className="absolute opacity-20" /> */}
      <span className="pb-4 gradient-text text-9xl font-bold text-center tracking-[-10px]">
        Coming Soon
      </span>
    </main>
  );
}
