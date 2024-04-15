import React from "react";
import logo from '../statics/read_wise.png'
function Logo() {
  return (
    <div className="flex justify-between w-32 items-center">
      <img className='h-[2rem]' src={logo} alt="logo"></img>
      <span className="text-xl pl-2 font-semibold">Readwise</span>
    </div>
  );
}

export default Logo;
