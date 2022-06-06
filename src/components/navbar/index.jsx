import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#3d6868]">
      <h6 className="text-3xl font-bold ">
        EDUARDO <span className="text-white">RODRIGUES</span>
      </h6>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            ínicio
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>

      {/*hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#3d6868] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            ínicio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/eduardo-rodrigues-dos-santos-96745323a"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EduardoR99"
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <Link className="flex justify-between items-center w-full text-gray-300"
              to="contact" smooth={true} duration={500}>
                Contato <BsFillPersonLinesFill size={30} />{" "}
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
