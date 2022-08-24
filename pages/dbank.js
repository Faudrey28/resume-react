import Image from "next/image";
import React from "react";
import dbankImg from "../public/assets/projects/dbank.webp";
import Link from "next/link";

const dbank = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={dbankImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">dbank</h2>
          <h3>HTML, CSS, Javascript, webpack, blockchain, Web3 and Motoko</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a DeFi Project, where a bank called dbank is built with its
            functionality for depositing, withdrawing and compounding the money.
          </p>
          <a href="https://github.com/Faudrey28/dbank" target="_blank">
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

export default dbank;
