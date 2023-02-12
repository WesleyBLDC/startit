import Hero from "./Hero";
import SubHero from "./SubHero";
import carousell1 from "../styles/p1_50downsize.png";
import logoPic from "../styles/White_StartIT_full_logo_rect.png"; //"../styles/White_StartIT_full_logo.png";
import Carousel from "./Carousel";

function Home() {
  return (
    // <div className="absolute top-1/2 w-full text-center">
    //   <p className="text-sm sm:text-lg">
    //     Today's thinkers, Tomorrow's Technopreneur
    //   </p>
    // </div>
    <>
      {/* <Hero /> */}
      {/*<SubHero title={"Our Mission"} />
      <SubHero title={"Our Vision"} /> */}

      {/* <Carousel /> */}

      <div className=" mx-auto">
        {/* Hero component */}
        <Hero />

        {/* First segment */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-center">Our Mission</h2>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Second segment */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-center">Our Vision</h2>
          <p className="text-lg text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
