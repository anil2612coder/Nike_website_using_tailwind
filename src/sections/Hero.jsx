import React from "react";
import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { statistics } from "../constant/index.js";
import bigshoeimage1 from "../assets/images/big-shoe1.png";
import bigshoeimage2 from "../assets/images/big-shoe2.png";
import bigshoeimage3 from "../assets/images/big-shoe3.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 border-2 border-red-500 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-7 font-palanquin text-[75px] max-sm:text-[65px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block ">Nike</span> Shoes
        </h1>
        <p className="font-montserrattext-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-polanquin font-semibold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={bigshoeimage1} alt="" />
      </div>
    </section>
  );
};

export default Hero;
