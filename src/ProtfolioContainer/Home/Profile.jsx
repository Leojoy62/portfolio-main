import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Profile.css";
import pp from "../../../public/PP Size.jpg";

import ProFooter from "./ProFooter";
import NavBar from "./NavBar";

const Profile = () => {
  return (
    <div id="home" className="profile-container bg-bgcolor ">
      <div>
        <NavBar />
      </div>
      <div className="lg:flex lg:justify-between  pt-10 pb-24 lg:px-[5%] lg:flex-row flex flex-col justify-center  items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-8 text-3xl text-white justify-center items-center">
            <a href="https://www.facebook.com/leojoy62/" target="blank">
              <RiFacebookBoxFill className="hover:text-orange-600" />
            </a>
            <a href="https://github.com/Leojoy62" target="blank">
              <FaSquareGithub className="hover:text-orange-600" />
            </a>
            <a href="https://www.linkedin.com/in/leojoy62/" target="blank">
              <FaLinkedin className="hover:text-orange-600" />
            </a>
            <a href="https://twitter.com/LeoJoyz" target="blank">
              <FaSquareXTwitter className="hover:text-orange-600" />
            </a>
          </div>
          <div className="mt-3 mb-5 ml-8 lg:ml-0">
            <h1 className="text-3xl font-bold text-white">
              Hello, I'm{" "}
              <span className="text-orange-600">Leonard Joy Mridha</span>
            </h1>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white ">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Developer",
                  "Software Developer",
                  "Web Developer",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>

          <div className="my-5 lg:ml-0 flex flex-col justify-center items-center lg:px-0 px-[2%] ml-3">
            <p className="text-gray-400 text-lg ">
              Knack on building applications with front and back-end operations.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#contact"
              className="btn btn-outline hover:bg-orange-600 text-white px-10 rounded-3xl lg:text-[13px] font-bold"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1-BByC5upYhZoDxvotRFIPVNvpxKbpq5q/view"
              target="blank"
            >
              <button className="btn bg-orange-600 hover:bg-black border-0 text-white px-10 rounded-3xl lg:text-[13px] font-bold">
                Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture mt-5 lg:mt-0 ">
          <img src={pp} alt="" />
        </div>
      </div>

      <ProFooter />
    </div>
  );
};

export default Profile;
