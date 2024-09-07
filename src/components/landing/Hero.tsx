import Image from "next/image";
import React from "react";
import education from "@/images/landing/EducationFrame.svg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-screen p-4">
      <div className="w-full flex flex-col items-center justify-center max-w-screen-l-l my-auto gap-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-default-black">
          <p className="font-header font-black text-xl">
            UniLearn - Your{" "}
            <span className="text-transparent bg-gradient-to-r from-primary-main via-secondary-main to-accent-main bg-clip-text">
              All-in-One
            </span>{" "}
            E-Classroom Solution!
          </p>
          <p className="font-body text-sm">
            Welcome to Unilearn - Transform the Way You Learn and Teach, All in
            One Place
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-2">
          <button
            className="w-full p-2 rounded-full font-bold font-header bg-primary-main 
                    text-default-white border-2 border-primary-main text-sm"
          >
            Get Started
          </button>
          <button
            className="w-full p-2 rounded-full font-bold font-header 
                    text-secondary-dark border-secondary-dark border-2 text-sm"
          >
            Log In
          </button>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src={education}
            alt="education"
            className="drop-shadow-lg max-w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
