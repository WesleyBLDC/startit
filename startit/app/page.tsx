import React from "react";
import Hero from "./Hero";
import SubHero from "./SubHero";

function Home() {
  return (
    // <div className="absolute top-1/2 w-full text-center">
    //   <p className="text-sm sm:text-lg">
    //     Today's thinkers, Tomorrow's Technopreneur
    //   </p>
    // </div>
    <>
      <Hero />
      <SubHero title={"Our Mission"} />
      <SubHero title={"Our Vision"} />
    </>
  );
}

export default Home;
