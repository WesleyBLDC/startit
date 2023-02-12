import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function MainCarousel() {
  return (
    <Carousel>
      <div>
        {/* <Image src="/spaceWithMoon.webp" alt="Mountains with snow" /> */}
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
