import Image from "next/image";
import React from "react";
import education from "@/images/landing/EducationFrame.svg";
import learning from "@/images/landing/Learning.svg";
import online from "@/images/landing/OnlineCourse.svg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-screen p-4 t:p-8 bg-primary-dark">
      <div className="w-full flex flex-col items-center justify-center max-w-screen-l-l my-auto gap-8 l-s:flex-row l-s:gap-16">
        <div
          className="flex flex-col items-center justify-center gap-8 text-center w-full 
                   l-s:items-start l-s:text-left"
        >
          <div className="flex flex-col gap-2 items-center justify-center l-s:items-start l-s:gap-4">
            <p className="font-header font-black text-2xl t:text-4xl l-l:text-6xl text-default-white">
              <span className="text-transparent bg-gradient-to-r from-secondary-main to-secondary-light bg-clip-text">
                UniLearn
              </span>{" "}
              Your{" "}
              <span className="text-transparent bg-gradient-to-r from-accent-main to-accent-light bg-clip-text">
                All-in-One
              </span>{" "}
              <br className="hidden m-l:flex" />
              E-Classroom
            </p>
            <p className="font-body text-sm t:text-base l-l:text-lg text-primary-light">
              Welcome to Unilearn - Transform the Way You Learn and Teach, All
              in One Place
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-2 l-s:w-fit l-s:flex-row t:gap-4">
            <button
              className="w-full p-2 rounded-full font-bold font-header bg-secondary-main 
                    text-primary-dark border-2 border-secondary-main text-sm t:w-40 t:text-base l-s:w-48"
            >
              Get Started
            </button>
            <button
              className="w-full p-2 rounded-full font-bold font-header 
                    text-default-white border-default-white border-2 text-sm t:w-40 t:text-base l-s:w-48"
            >
              Log In
            </button>
          </div>
        </div>

        <div className="w-fit flex flex-col items-center justify-center l-s:justify-start relative aspect-square">
          <Image
            src={education}
            alt="education"
            className="drop-shadow-[0_0.5rem_0.5rem_#000000DE] w-80 l-s:w-[44rem] l-l:w-[56rem] saturate-150 relative z-10"
            draggable={false}
          />

          <Image
            src={online}
            alt="education"
            className="drop-shadow-[0_0.5rem_0.5rem_#000000DE] w-40 saturate-150 absolute z-20 right-0 top-0 animate-floatDownUp"
            draggable={false}
          />

          <Image
            src={learning}
            alt="education"
            className="drop-shadow-[0_0.5rem_0.5rem_#000000DE] w-40 saturate-150 absolute z-20 left-0 bottom-0 animate-floatUpDown"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
