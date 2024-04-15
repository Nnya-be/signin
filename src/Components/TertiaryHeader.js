import React from "react";

function TertiaryHeader(props) {
  const { title } = props;
  return (
    <>
      <h3 className="text-xl font-bold">{title}</h3>
    </>
  );
}

export default TertiaryHeader;
