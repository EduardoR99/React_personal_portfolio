import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#3d6868] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600" data-aos="zoom-in" data-aos-duration="2000">
              Sobre
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            className="sm:text-right text-4xl font-bold"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <p>
              Olá, eu sou o Eduardo, prazer em conhecê-lo, por favor de uma
              olhada no meu Portifólio
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="3000">
            <p>

              Sou apaixonado por tecnologia e amo aprender coisas novas, entrei no mundo da programação no 
              segundo semestre de 2021. Estou me especializando em desenvolvimento 
              de Front-End, e venho aprendendo e me apaixonando pela área cada vez 
              mais. O que você faria se tivesse um desenvolvedor disponível ao seu alcance?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
