import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import languageIcon from "../../assets/languageIcon.svg";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".sidebar")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative md:hidden z-10 py-5">
      {/* Sidebar Toggle Button */}

      <NavLink to="/" className="flex gap-1 items-center mb-3 mt-0 top-4 absolute left-1">
        <img className="h-9 w-9" src={logo} alt="logo" />
        <h2 className="font-bold text-lg">
          <span className="text-brandOrange">Coin Cap</span> Converter
        </h2>
      </NavLink>

      <button
        className="text-white absolute right-0 p-3 pt-1 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        {!isOpen && <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg p-5 sidebar`}
      >
        <button
          className="text-white focus:outline-none mb-4"
          onClick={() => setIsOpen(false)}
        >
          {isOpen && <FaTimes size={24} />}
        </button>

        {/* Logo */}
        <NavLink to="/" className="flex gap-2 items-center mb-6">
          <img className="h-10 w-10" src={logo} alt="logo" />
          <h2 className="font-bold text-lg">
            <span className="text-brandOrange">Coin Cap</span> Converter
          </h2>
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <NavLink
            to="/converter"
            className={({ isActive }) =>
              `hover:text-brandOrange transition ${isActive ? "text-brandOrange" : "text-white"}`
            }
          >
            Converter
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-brandOrange transition ${isActive ? "text-brandOrange" : "text-white"}`
            }
          >
            Market Cap
          </NavLink>
          <NavLink
            to="/goal-tracker"
            className={({ isActive }) =>
              `hover:text-brandOrange transition ${isActive ? "text-brandOrange" : "text-white"}`
            }
          >
            Goal Tracker
          </NavLink>
        </nav>

        {/* Language Selector */}
        <div className="absolute bottom-5 left-5 flex items-center space-x-2 text-gray-300">
          <div className="flex gap-1 items-center">
            <img className="w-4 h-4" src={languageIcon} alt="language" />
            <select
              name="language"
              className="text-white outline-none bg-transparent text-sm cursor-pointer w-12"
            >
              <option value="en" className="text-white bg-black">EN</option>
              <option value="fr" className="text-white bg-black">FR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
