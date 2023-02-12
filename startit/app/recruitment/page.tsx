import React from "react";
import ProfileCard from "../ProfileCard";
import Image from "next/image";

function Home() {
  return (
    <div>
      {" "}
      <p>Recruitment</p>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/spaceWithMoon.webp"
          alt="Mountains with snow"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1
        style={{
          paddingTop: "30vh",
          fontFamily: "monospace",
          fontSize: "3.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Next.js Background Image Tutorial
      </h1>
    </div>
  );
}

export default Home;
