import React from "react";
import star_outline from "../statics/star-outlined.svg";
import star_dark from "../statics/star.svg";

function Star(props) {
  const { type } = props;
  const star = type === "fill" ? star_dark : star_outline;
  return (
    <>
      <img src={star}></img>
    </>
  );
}

export default Star;
