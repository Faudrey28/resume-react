import Image from "next/image";
import React from "react";
import tindogImg from "../public/assets/projects/tindog.webp";
import Link from "next/link";

const tindog = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={tindogImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Tindog</h2>
          <h3>Html, Css and Bootstrap</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a simple web page for dogs. It is a Startup landing page for
            a fictional application named TinDog. TinDog allows the user to find
            other dogs & their owners nearby in the swipe left/right style made
            famous by Tinder.We build it by using some basic technologies like
            Html, Css and Bootstrap.
          </p>
          <a href="https://github.com/Faudrey28/tindog" target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default tindog;
