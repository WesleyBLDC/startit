import Link from "next/link";
import Image from "next/image";
import logoPic from "../styles/White_StartIT_full_logo.png";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={logoPic}
            alt="logo"
            // width="150"
            height="100"
            // objectFit="contain"
          />
        </Link>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base text-white items-center rounded-full text-center hover:text-yellow-500"
        >
          Home
        </Link>
        <Link href="/departments" className="px-2 py-1 text-white">
          Departments
        </Link>
        {/* <Link href="/" className="px-2 py-1 text-white">
        Events
      </Link> */}
        <Link href="/recruitment" className="px-2 py-1 text-white">
          Recruitment
        </Link>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base text-white items-center rounded-full text-center"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
