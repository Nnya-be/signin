import React from "react";

function SectionParagraph(props) {
  const paragraph = props.paragraph;
  return (
    <>
      <p className=" text-justify text-slate-700">{paragraph}</p>
    </>
  );
}

export default SectionParagraph;
