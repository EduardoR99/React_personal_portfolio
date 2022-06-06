import React from 'react'
import Angular from '../../assets/angular.png';
import Bootstrap from '../../assets/bootstrap.png'
import Css from '../../assets/css.png';
import Html from '../../assets/html.png';
import Javascript from '../../assets/javascript.png';
import Mongo from '../../assets/mongo.png';
import Node from '../../assets/node.png';
import Reacting from '../../assets/react.png';



const Skills = () => {
  return (
    <div name ='skills' className='w-full h-screen bg-[#3d6868] mb-[60px] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  '>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Habilidades</p>
            <p className='py-4'>// Algumas tecnologias que domino</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-lg shadow-pink-600 hover:scale-120 duration-500' data-aos="fade-right" data-aos-duration="2000">
              <img className='w-20 mx-auto my-2' src={Html} alt="html icon" />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-lg shadow-pink-600 hover:scale-110 duration-500' data-aos="fade-right" data-aos-duration="2000">
              <img className='w-20 mx-auto my-2' src={Css} alt="css icon" />
              <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-lg shadow-pink-600 hover:scale-110 duration-500' data-aos="fade-left" data-aos-duration="2000">
              <img className='w-20 mx-auto my-2' src={Javascript} alt="htm icon" />
              <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-lg shadow-pink-600 hover:scale-110 duration-500' data-aos="fade-left" data-aos-duration="2000">
              <img className='w-20 mx-auto my-2' src={Reacting} alt="htm icon" />
              <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-lg shadow-pink-600 hover:scale-110 duration-500' data-aos="fade-right" data-aos-duration="2000">
              <img className='w-20 mx-auto my-2' src={Angular} alt="htm icon" />
              <p className='my-4'>ANGULAR</p>
            </div>
            <div className='shadow-lg shadow-pink-600 hover:scale-110 duration-500' data-aos="fade-right" data-aos-duration="2000">
              <img className='w-20 mx-auto my-2' src={Bootstrap} alt="htm icon" />
              <p className='my-4'>BOOTSTRAP</p>
            </div>
            <div className='shadow-lg shadow-pink-600 hover:scale-110 duration-500' data-aos="fade-left" data-aos-duration="2000">
              <img className='w-20 mx-auto my-2' src={Node} alt="htm icon" />
              <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-lg shadow-pink-600 hover:scale-110 duration-500' data-aos="fade-left" data-aos-duration="2000">
              <img className='w-20 mx-auto my-2' src={Mongo} alt="htm icon" />
              <p className='my-4'>MONGO DB</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills