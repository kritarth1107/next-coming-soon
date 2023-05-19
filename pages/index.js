import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const [nameInputFocus, setNameInputFocus] = useState(false);
  const [emailInputFocus, setEmailInputFocus] = useState(false);

  const alertFinction = () => {
    alert(
      "This feature is not available yet. Please wait for the next update."
    );
  };
  return (
    <main className=" md:h-screen  w-full">
      <div className="background absolute h-full w-full bg-[#0c0c10] -z-20"></div>

      {width > 768 ? (
        <>
          <div className="background-hero -z-10 absolute h-full w-full grid place-items-center opacity-20">
            <video width="100%" height="auto" playsInline muted autoPlay>
              <source src="/assets/vv--2.mp4" type="video/mp4" />
            </video>
          </div>
        </>
      ) : (
        <>
          <div className="-z-10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-40">
            <div className="bg-coming-soon h-[300px] w-96">
              {/* <img src="/assets/2-coming-soon.png" className="" /> */}
            </div>
          </div>
        </>
      )}

      <div className="air-container flex flex-col h-full w-full">
        <main className="flex flex-col pt-20 md:pt-0 md:items-start justify-center flex-1 pb-20 w-full">
          <div className="row  w-full flex flex-col justify-end items-start">
            <img
              src="/assets/Blockhubble-long.svg"
              className="h-10 mb-5"
              alt=""
            />
            <p className="text-4xl md:text-6xl 2xl:text-8xl text-[#7d6ffb] inter font-semibold">
              Unleash the
            </p>
            <p className="text-4xl md:text-6xl 2xl:text-8xl text-[#7d6ffb] inter font-semibold">
              Power of Blockchain
            </p>
            <p className="text-4xl md:text-6xl 2xl:text-8xl text-[#7d6ffb] inter font-semibold">
              Exploration
            </p>
          </div>
          <div className="row pt-44 md:pt-32 2xl:pt-64 w-full flex flex-col items-end justify-center">
            <div className="content-here w-full md:w-[400px] 2xl:w-[500px] ">
              <p className="text-2xl 2xl:text-5xl md:text-4xl text-right md:text-left text-white inter font-semibold">
                Get Notified
              </p>
              <p className="text-2xl 2xl:text-5xl md:text-4xl text-right md:text-left text-white inter font-semibold">
                When we launch
              </p>
              <form
                method="POST"
                action="https://formsubmit.co/kritarth@airchains.io"
                className="input-section w-full h-12 mt-6 bg-[#18181F] flex items-center justify-between"
              >
                <input
                  type="email"
                  name="email"
                  className="h-full text-white bg-transparent px-6 flex-1 focus:outline-none"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  className="w-[120px] text-white font-semibold h-full bg-[#7d6ffb] "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
        <footer className="absolute bottom-10">
          <div className="text-[#b0b0b0] text-xs md:text-base flex flex-row gap-2 items-center justify-center">
            Product By
            <span>
              <img src="/assets/airchains.png" className="h-4 md:h-6" />
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
