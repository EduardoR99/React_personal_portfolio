import React from "react";
import Anime from "../../assets/anime.png";
import Crypto from "../../assets/crypto.png";
import CryptoWeb from "../../assets/cryptoweb.png";
import Netflix from "../../assets/netflix.png";
import Pokedex from "../../assets/pokedex.png";
import Smash from "../../assets/smash.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#3d6868]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projetos
          </p>
          <p className="py-6">// De uma olhada em alguns dos meus projetos</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            data-aos="fade-down-right" data-aos-duration="2000"
            style={{ backgroundImage: `url(${Anime})` }}
            className="shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
               Lista de Animes feito em ReactJS
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-anime-list.netlify.app" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/EduardoR99/Anime_list" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down" data-aos-duration="2000"
            style={{ backgroundImage: `url(${Crypto})` }}
            className="shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                informações de criptomoedas
              </span>
              <div className="pt-8 text-center">
                <a href="https://crypto-mania-edr.netlify.app" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/EduardoR99/React_CryptoMania" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="fade-down-left" data-aos-duration="2000"
            style={{ backgroundImage: `url(${CryptoWeb})` }}
            className="shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                website de criptomoedas
              </span>
              <div className="pt-8 text-center">
                <a href="https://crypto-mania-website.netlify.app" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/EduardoR99/React-CryptoMania-Website" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up-right" data-aos-duration="2000"
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Clone layout Netflix
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-netflix-clone-edr.netlify.app" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/EduardoR99/React_Netflix_Clone" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            data-aos="fade-up" data-aos-duration="2000"
            style={{ backgroundImage: `url(${Pokedex})` }}
            className="shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pokedex em AngularJS
              </span>
              <div className="pt-8 text-center">
                <a href="https://pokedexd-angular.netlify.app" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/EduardoR99/Angular_Pokedex" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
           data-aos="fade-up-left" data-aos-duration="2000"
            style={{ backgroundImage: `url(${Smash})` }}
            className="shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                layout de Hamburgueria em React
              </span>
              <div className="pt-8 text-center">
                <a href="https://smash-house.netlify.app" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/EduardoR99/Smash_House" target='_blank' rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
