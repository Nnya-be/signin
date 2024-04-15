import React from "react";
import Star from "./Star";
import seen from '../statics/remove_red_eye.svg'

function ExploreCard(props) {
    const {rating,reviews, title,read, image} = props.value;
    // console.log(rating)
  return (
    <div className="transition-all flex flex-col items-start w-[22rem] h-[22rem] shadow-md hover:shadow-xl rounded">
      <div className='w-full h-3/6'>
        <img className="w-full h-full rounded" src={image} ></img>
      </div>
      <div className="flex flex-col justify-between h-full items-start px-4 py-5">
        <div className="flex items-center">
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <Star></Star>
            <span className="text-slate-500 pl-2">{rating} ({reviews})reviews</span>
        </div>
        <h4 className="text-lg font-bold capitalize"> {title}</h4>
        <div className="flex justify-between items-center">
            <img className="grayscale saturate-50 contrast-50" src={seen}></img>
            <div className="flex px-4 text-slate-500">
                <span>{read}</span>
                <span className="">visitors read</span>
            </div>
        </div>
      </div>
    </div>
  );
  
}

export default ExploreCard;
