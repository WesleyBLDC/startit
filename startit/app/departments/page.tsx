import React from "react";
import MainCarousel from "../../pages/archiveComponents/MainCarousel";
import ProfileCard from "../ProfileCard";
import SegmentTitle from "../SegmentTitle";
import SubHero from "../SubHero";

function Home() {
  return (
    <div>
      <p>Department</p>
      <SegmentTitle title={"Departments"} />

      <div className="flex flex-col items-center justify-center h-full ">
        <div>
          <ProfileCard />
        </div>
        <div className="flex">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
