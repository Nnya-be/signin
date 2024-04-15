import React from "react";
import NavLInks from "./NavLinks";
import Button from "./Button";
import Logo from "./Logo";


const nav_links = [
  {
    id: "01",
    name: "Home",
  },
  {
    id: "02",
    name: "Explore",
  },
  {
    id: "03",
    name: "About Us",
  },
  {
    id: "04",
    name: "Login",
  },
  {
    id: "05",
    name: "SignUp",
  },
];

function Navigation() {
  return (
    <div className="flex justify-between items-center px-40 h-24">
      <Logo></Logo>
      <ul className="flex justify-between items-center">
        {nav_links.map((value) => {
          return <NavLInks key={value.id} name={value.name}></NavLInks>;
        })}
      </ul>
      <Button text='Read Books'></Button>
    </div>
  );
}

export default Navigation;
