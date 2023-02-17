import Link from "next/link";
import Image from "next/image";
import logoPic from "../styles/White_StartIT_full_logo_rect.png"; //"../styles/White_StartIT_full_logo.png";
import bithacksLogo from "/bithacksLogo.png"; //"../styles/White_StartIT_full_logo.png";

import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        <Link href="/">
          <Image
            src={logoPic}
            alt="StartIT Logo"
            width={200}
            height={150}
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <Link
              href="/"
              className="text-sm md:text-base text-white items-center rounded-full text-center hover:text-yellow-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/departments"
              className="text-sm md:text-base text-white items-center rounded-full text-center hover:text-yellow-500"
            >
              Departments
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="text-sm md:text-base text-white items-center rounded-full text-center hover:text-yellow-500"
            >
              Events
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="/"
              className=" text-sm md:text-base text-white items-center rounded-full text-center hover:text-yellow-500 "
            >
              Contact Us
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Get started</a> */}
        <Link href="/bithacks">
          <Image
            src="/bithacksLogoCropped.png"
            alt="StartIT Logo"
            width={200}
            height={150}
          ></Image>
        </Link>
      </div>
    </div>
  );
}
