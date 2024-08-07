import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="px-[4%]">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-bgcolor"
            >
              <li className="style-nav ">
                <a href="#home">Home</a>
              </li>
              <li className="style-nav">
                <a href="#about">AboutMe</a>
              </li>
              <li className="style-nav">
                <a href="#resume">Resume</a>
              </li>
              <li className="style-nav">
                <a href="#contact">ContactMe</a>
              </li>
            </ul>
          </div>

          <a className="text-4xl font-bold ">
            LEO<span className="text-orange-600">N</span>ARD.
          </a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] ">
            <li className="style-nav">
              <a href="#home">Home</a>
            </li>
            <li className="style-nav">
              <a href="#about">AboutMe</a>
            </li>
            <li className="style-nav">
              <a href="#resume">Resume</a>
            </li>
            <li className="style-nav">
              <a href="#contact">ContactMe</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
