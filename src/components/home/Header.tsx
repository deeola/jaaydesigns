import React, { FC } from "react";
import Navbar from "../shared/Navbar";
import Hero from "./Hero";

const Header: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="navLine"></div>
      <Hero />
    </div>
  );
};

export default Header;
