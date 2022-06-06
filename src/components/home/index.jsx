import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#3d6868]">
      {/*Container*/}
      <div
        data-aos="zoom-in-left"
        data-aos-duration="2000"
        data-aos-once="false"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p className="text-pink-600 text-2xl">Olá, meu nome é</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Eduardo <span className="text-black">Rodrigues</span>{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-pink-600">
          Sou um desenvolvedor front-end
        </h2>
        <p className="text-[#ccd6f6] py-4 max-w-[700px]">
          Sou um programador front-end, me especializando em construir
          experiências digitais. Focando em aplicações web responsivas.
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-pink-600 group text-2xl border-2 border-pink-600 mx-1 px-6 py-3 my-2 flex item-center justify-center hover:text-white hover:border-white">
              Veja Mais
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="my-0.5 mx-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
