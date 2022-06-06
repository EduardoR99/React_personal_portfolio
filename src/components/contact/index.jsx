import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#3d6868] flex justify-center items-center p-4'>
        <form data-aos="flip-right" data-aos-duration="3000"
        method='POST' action="https://getform.io/f/bec3cd31-4e4e-4614-8f80-9dde57b4bbec" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl inline border-b-4 border-pink-600 text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'
                >// Envie o formulário abaixo, ou me mande um e-mail em  -  eduardo.santos.008@acad.pucrs.br</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name...' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='E-mail...' name='email'/>
            <textarea placeholder='Digite sua mensagem aqui...' className=' p-2 bg-[#ccd6f6]' name="message" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Vamos lá!</button>
        </form>
    </div>
  )
}

export default Contact