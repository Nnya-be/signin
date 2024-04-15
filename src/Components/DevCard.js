import React from "react";

function DevCard(props) {
  const { title, list } = props.value;
  return (
    <div className="w-full h-max bg-slate-100">
        <img></img>
      <h5 className="text-slate-300">{title}</h5>
      <ul className="text-lg font-semibold">
        {list.map((value) => {
          return <li className="">{value}</li>;
        })}
      </ul>
    </div>
  );
}

export default DevCard;
