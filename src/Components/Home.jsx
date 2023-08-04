import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BiRightArrowAlt} from 'react-icons/bi'
import {FaLinkedinIn} from 'react-icons/fa'
import Desta  from "../Images/Desta.jpg"
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black  to-gray-300'>
    <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
    <div className='flex flex-col justify-center'>
      <h1 className='text-3xl sm:text-7xl font-bold text-white'> I am a full stack developer </h1>
      <p className='text-graay-500 py-4'>I am an experienced and motivated Web Developer with over 2 years of professional experience.  My expertise lies in web application development, I possess a strong work ethic and adaptability to thrive in challenging environments. I possess a skill set encompassing comprehensive problem-solving, creative troubleshooting, and adept project management capabilities.</p>
   
    <div><button className='flex flex-row'>portofolio<span><BiRightArrowAlt /></span></button>
    
    </div>
    </div>
    <div>
      <img  src ={Desta}className='rounded-2xl mx-auto w-2/3 md:w-full'/>
    </div>
    </div>
    </div>
  )
}

export default Home;