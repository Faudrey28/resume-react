import Image from "next/image";
import React from "react";
import keeperImg from "../public/assets/projects/keeper.webp";
import Link from "next/link";

const keeper = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={keeperImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Keeper</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a simple clone/imitation of Google Keep made with React. It
            uses React Hooks, state, props, and array mapping to allow for the
            creation and deletion of notes.
          </p>
          <a
            href="https://github.com/Faudrey28/todolist"
            target="_blank"
            rel="noreferrer"
          >
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

export default keeper;
