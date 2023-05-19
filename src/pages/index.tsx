import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="bg-primary-dark flex min-h-screen items-center justify-center text-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="mb-4 text-center text-5xl font-bold">
          Welcome to My Portfolio
        </h1>
        <p className="mb-8 text-center text-2xl">
          I am a full-stack developer with a passion for creating amazing web
          applications.
        </p>
        <div className="flex items-center justify-center">
          <div className="mr-4 h-20 w-20 overflow-hidden rounded-full">
            <Image
              className="object-cover"
              src="/profile.jpeg"
              alt="Profile"
              width={80}
              height={80}
            />
          </div>
          <div>
            <h2 className="mb-2 text-3xl font-semibold">Noyan Doğan Enginar</h2>
            <p className="text-xl">Full-Stack Developer</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#projects" className="btn-primary btn-lg btn">
            View My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
