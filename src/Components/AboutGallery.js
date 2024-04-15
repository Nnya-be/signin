import React from "react";

function AboutGallery() {
  return (
    <div className="lg:grid lg:visible invisible hidden lg:ml-5  xl:mx-5 grid-cols-2 grid-rows-1 gap-x-4 lg:h-4/6 xl:h-5/6 justify-center items-center">
      <img
        className="w-full h-full"
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
      ></img>
      <img
        className="w-full h-full"
        src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww"
        alt="image_2"
      ></img>
    </div>
  );
}

export default AboutGallery;
