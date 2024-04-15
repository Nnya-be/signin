import React from "react";
import search_img from '../statics/magnifying-glass1.svg'
import Star from "./Star";

const number = 4332
function Banner() {
  return (
    <div className="flex items-center p-20 h-5/6 w-full">
      <div className="w-1/2 px-10 pb-8 flex flex-col justify-between items-start h-full ">
        <div className=" items-center justify-between flex">
          <Star type='fill'></Star>
          <Star type='fill'></Star>
          <Star type='fill'></Star>
          <Star type='fill'></Star>
          <Star></Star>
          <span className="p-2">Trusted by {number} visitors</span>
        </div>
        <h1 className="text-6xl font-bold">Access Books with Readwise</h1>
        <span className="text-lg font-medium pr-28">
          Access favorite books online for free with Readwise at your comfort
        </span>
        <div className="flex w-full h-10">
          <input className="w-4/6 h-full rounded py-4 px-8 placeholder:text-lg outline-0" type="text" name="search" placeholder="Search books"></input>
          <img className="bg-slate-50  p-2  w-max rounded-r" src={search_img}></img>
        </div>
      </div>
      <div>
        <img src="https://images.unsplash.com/flagged/photo-1559263982-d747f083ba5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMG1hbiUyMHJlYWRpbmd8ZW58MHx8MHx8fDA%3D" className="w-[28rem] h-[22rem]"></img>
        <img></img>
      </div>
    </div>
  );
}

export default Banner;
