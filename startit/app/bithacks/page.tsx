import React from "react";

import Image from "next/image";
function Home() {
  return (
    <div className="content-center">
      <Image
        src="/bithacksPoster.png"
        alt="bithacks poster"
        width={1500}
        height={2000}
      ></Image>
    </div>
  );
}

export default Home;
