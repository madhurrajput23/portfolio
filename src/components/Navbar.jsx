import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-4xl font-signature">
          Portfo<span className="text-5xl text-cyan-500">lio</span>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({id, link }) => {
          return (
            <li
              key={id}
              className="px-6 cursor-pointer font-medium text-gray-400 hover:scale-105 duration-200"
            >
              {link}
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ link, id }) => {
            return (
              <li key={id} className="px-4 cursor-pointer py-5 text-4xl">
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
