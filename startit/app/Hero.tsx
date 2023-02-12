import React from "react";

export default function Hero() {
  return (
    // <div className="w-full text-center">
    //   <div className="max-w-[1240px] w-full mx-auto p-2 justify-center items-center">
    //     <div>
    //       <p className="uppercase text-sm tracking-wdest text-gray-50">
    //         NUS Computing Technepreneurship Society
    //       </p>
    //       <h1 className="py-4 text-white">Today's thinkers,</h1>
    //       <h1 className="py-4 text-white">
    //         Tomorrow's <span className="text-yellow-200">Technopreneur</span>
    //       </h1>
    //       {/* can add social icons below here */}
    //     </div>
    //   </div>
    // </div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="m-auto">
          <h1 className="text-5xl font-bold">Today's thinkers,</h1>
          <h1 className="text-5xl font-bold inline-block  ">
            Tomorrow's&nbsp;
            <span className="text-yellow-200 inline-block">Technopreneurs</span>
          </h1>
          <p className="py-6">NUS Computing Technepreneurship Society</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
