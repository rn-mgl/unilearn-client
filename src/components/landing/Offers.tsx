import React from "react";
import offers from "../../content/landing/offers";
import gradient from "@/images/landing/GradientBlur.svg";
import Image from "next/image";

const Offers = () => {
  const mappedOffers = offers.map((offer, index) => {
    return (
      <div
        key={offer.label}
        className="w-full flex flex-col items-center justify-center gap-2 even:text-left even:items-start odd:text-right odd:items-end relative p-4 t:p-8"
      >
        <p className="font-header font-bold t:text-xl l-l:text-2xl z-10">
          {offer.label}
        </p>
        <p className="font-body text-sm max-w-screen-t t:text-base l-l:text-lg z-10">
          {offer.content}
        </p>
        <div className="w-full aspect-video rounded-md bg-gradient-to-br from-primary-light to-accent-light t:max-w-screen-t z-10 shadow-md"></div>

        <Image
          src={gradient}
          alt="gradient"
          className={`${
            index % 2 === 0
              ? "left-0 -translate-x-10"
              : "right-0 translate-x-10 -scale-x-100"
          } absolute z-0 w-full l-s:w-5/6`}
        />
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-screen bg-default-white">
      <div className="w-full flex flex-col items-center justify-start max-w-screen-l-l gap-8 l-s:gap-16 overflow-hidden">
        <p className="font-header font-black text-2xl text-primary-main t:text-4xl l-l:text-6xl p-4 t:p-8">
          Why Choose UniLearn?
        </p>

        {mappedOffers}
      </div>
    </div>
  );
};

export default Offers;
