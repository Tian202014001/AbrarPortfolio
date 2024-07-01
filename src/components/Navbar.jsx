import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen  mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">
              Abrar <span className="text-red-500">Ahmed</span>
            </h1>
            <p className="text-sm">Software Developer</p>
          </div>

          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)}>
              {menu ? (
                <MdClose className="text-3xl md:hidden" />
              ) : (
                <IoMdMenu className="text-3xl md:hidden" />
              )}
            </div>
          </div>
        </div>
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
