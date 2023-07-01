import React from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../../Assets/Images/Arrow.svg";
import Button from "./Button";
import "../../../../src/App.css";
import { useState } from "react";
import Img from "../../../Assets/Images/Img.svg"
import Gig from "../../../Assets/Images/GIG.svg"
import Slack from "../../../Assets/Images/Slack.svg"

const Header = () => {
  const [isHovered, SetIsHovered] = useState(false);
  return (
    <header h-full>
      <nav className=" flex items-center justify-between gap-5 px-20 height-14 ">
        <div className="font-[neuton800] text-200">
          <h1>Compound</h1>
        </div>

        <ul className=" flex items-center gap-20">
          <NavLink to="#">Membership</NavLink>
          <NavLink to="#">Resouses</NavLink>
          <NavLink to="#">Company</NavLink>
          <div />
        </ul>
        <div className="flex gap-5">
          <p>Sign-in</p>
          <button className="bg-black text-white gap-3 flex items-center rounded-5 px-4 py-[.1rem]">
            Get started <img src={Arrow} alt="" />
          </button>
        </div>
        <div>
          <Button type="default">Get Started</Button>
        </div>
      </nav>
      <section className="p-20 h-90% ">
        <h1
          className={` text-[3.5rem] ${
            !isHovered ? "blur-sm" : "blur-0"
          } hover:transition`}
          onMouseOver={() => SetIsHovered(true)}
          onMouseLeave={() => SetIsHovered(true)}
        >
          We focus on your finances
        </h1>
        <h1
          className={` text-[3.5rem] ${
            isHovered ? "blur-sm" : "blur-0"
          } hover:transition`}
          onMouseOver={() => SetIsHovered(false)}
          onMouseLeave={() => SetIsHovered(false)}
        >
          you focus on what matters most
        </h1>
      </section>
      <section className="m-5 flex ">
        <button className=" ml-50   bg-black text-white gap-3 flex items-center rounded-5 px-4 py-[.5rem] ">
          Get started <img src={Arrow} alt="" />
        </button>

        <button className=" ml-50 border-purple-50 bg-white text-black gap-3 flex items-center rounded-5 px-4 py-[.1rem]">
          Learn more <img src={Arrow} alt="" />
        </button>
      </section>
      <section className="flex p-[6rem] justify-between">
        <p className="  w-[27rem] text-xm font-weight: 800">Wealth management for people
          from leading tech companies</p>
          <p><img src={Slack} alt="" /></p>
          <p className="pd-3"><img src={Gig} alt="" /></p>
          <p><img src={Img} alt="ax" /></p>
      </section>
    </header>
  );
};

export default Header;
