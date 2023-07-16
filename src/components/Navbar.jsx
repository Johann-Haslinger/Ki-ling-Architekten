import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ s }) => {
  return (
    <nav className="fixed top-0 flex justify-between w-screen md:pl-24  md:p-4 p-2.5 pl-5 bg-bg bg-opacity-60   backdrop-blur-2xl">
      <p className="text-lg font-semibold  md:text-xl">{s}</p>
      <div className="w-fit text-xs  space-x-8 mr-8 flex ">
        <p className="invisible md:visible">Projekte</p>
        <p className="invisible md:visible">Kontakt</p>
      </div>
    </nav>
  );
};

export default Navbar;
