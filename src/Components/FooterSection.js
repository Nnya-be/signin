import React from "react";
import NavLinks from "./NavLinks";
import logo from "../statics/read_wise.png";
import facebook from "../statics/facebook.svg";
import x from "../statics/x.svg";
import gmail from "../statics/google-plus3.svg";
import linkedin from "../statics/linkedin.svg";
import whatsapp from "../statics/whatsapp.svg";

const icons_lists = [
  {
    icon: facebook,
    id: "01",
  },
  {
    icon: x,
    id: "02",
  },
  {
    icon: gmail,
    id: "03",
  },
  {
    icon: linkedin,
    id: "04",
  },
  {
    icon: whatsapp,
    id: "05",
  },
];

const item_lists = [
  {
    id: "01",
    item: "Home",
  },
  {
    id: "02",
    item: "Explore",
  },
  {
    id: "03",
    item: "About Us",
  },
];

function FooterSection() {
  return (
    <div className="bg-amber-400/50 flex-col lg:flex-row flex justify-between items-center px-20 h-max py-8">
      <div className="">
        <ul className="text-orange-700 flex  md:flex-row flex-col md:grid md:grid-cols-3 md:grid-rows-1 justify-between items-center">
          {item_lists.map((list) => {
            return <NavLinks key={list.id} name={list.item}></NavLinks>;
          })}
        </ul>
      </div>
      <div className="flex justify-around items-center flex-col">
        <div className="text-lime-200 flex justify-around items-center flex-col">
          <img className="h-40 " src={logo}></img>
          <span className="text-orange-700 text-2xl">ReadWise</span>
        </div>
        <div className="text-orange-700 text-justify">
          &copy; {new Date().getFullYear()} ReadWise. All rights reserved.
        </div>
      </div>
      <div className="flex mt-5">
        {icons_lists.map((value) => {
          return (
            <img
              className="mr-2 contrast-50 invert w-8 brightness-50"
              key={value.id}
              src={value.icon}
              alt={`icon ${value.id}`}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default FooterSection;
