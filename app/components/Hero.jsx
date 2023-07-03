import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text">
        Summarize articles with
        <br className="max-md:hidden" />
        <span className="orange_gradient"> Stream AI </span>
      </h1>
      <h2 className="desc">Summarize long articles</h2>
    </header>
  );
};

export default Hero;
