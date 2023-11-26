import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import bird from "../assets/bird.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [initialMount, setInitialMount] = useState(true);

  useEffect(() => {
    // Set the initial active item to "home" only on the first mount
    if (initialMount) {
      setActiveItem("home");
      setInitialMount(false);
    }
  }, [initialMount]);

  return (
    <div className="transparent w-full fixed z-10">
      <nav className="max-container padding-container relative flexBetween z-10 py-6">
        <img src={bird} alt="" className="w-[70px] h-[70px]" />

        <ul className="list-none hidden md:flexCenter flex-1 regular-16 cursor-pointer text-white gap-10">
          <li
            onClick={() => setActiveItem("home")}
            className={`nav-item bold-16 ${activeItem === "home" ? "text-black" : "text-gray-500"}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setActiveItem("birds")}
            className={`nav-item bold-16 ${activeItem === "birds" ? "text-black" : "text-gray-500"}`}
          >
            <Link to="/birds">Birds</Link>
          </li>
        </ul>

        <div className="hidden md:flexEnd bold-16 cursor-pointer text-white">
          <Link to="/birds">
            <button 
              onClick={() => setActiveItem("birds")}
              className="btn_home"
            >
              Let's fly
            </button>
          </Link>
        </div>

        <div className="md:hidden flexEnd flex-1">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? "flex" : "hidden"} p-14 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[260px] rounded-xl sidebar box-shadow`}
          >
            <ul className="list-none flexEnd flex-col flex-1 regular-16 cursor-pointer text-white gap-10">
              <li
                onClick={() => {
                  setActiveItem("home");
                  setToggle(!toggle);
                  }
                }
                className={`nav-item bold-16 ${activeItem === "home" ? "text-black" : "text-gray-500"}`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => {
                  setActiveItem("birds"),
                  setToggle(!toggle)
                  }
                }
                className={`nav-item bold-16 ${activeItem === "birds" ? "text-black" : "text-gray-500"}`}
              >
                <Link to="/birds">Birds</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
