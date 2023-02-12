import React from "react";
import { BsLinkedin } from "react-icons/bs";

function ProfileCard() {
  return (
    <div className="avatar flex flex-col items-center justify-center h-full">
      <div className="w-32 rounded-full bg-yellow-400"></div>
      <h6 className="text-yellow-400">Vice President</h6>
      <p>Mr Name Ipsum</p>
      <span className="inline-flex align-items-center items-center p-2">
        <BsLinkedin />
        <p className="pl-1">www.linkedin.com</p>
      </span>
    </div>
  );
}

export default ProfileCard;
