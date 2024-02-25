import { PiStarFourFill } from "react-icons/pi";
import { FaLinkedinIn,FaTwitter,FaFacebook } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import { IoLogoBehance } from "react-icons/io5";


const subtract = require("../src/Subtract.png")



export default function Nav(){

  const [scrollPosition, setScrollPosition] = useState(false); 


  useEffect(()=>{

    const handleScroll = ()=>{
      if(window.scrollY>=15){
        setScrollPosition(true);
      }else{
        setScrollPosition(false);
      }
   

    }


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[])



  return(

<nav className={!scrollPosition ? " max-h-20 w-screen p-5 flex justify-between text-gray-400 bg-[#191d11] absolute transition-transform duration-500 ease-in-out transform " : " z-30 max-h-20 w-screen p-5 flex justify-between text-gray-400 bg-[#191d11] fixed"} style={{ top: scrollPosition ? "0" : "-100px" }}>
  <div className={'flex-1 flex-start justify-center ml-32 space-x-10 '}>

    <a  className="font-normal hover:text-lime-400" href="">Home</a>
    <a  className="font-normal hover:text-lime-400" href="">Project</a>
    <a  className="font-normal hover:text-lime-400" href="">About</a>
  </div>
  <div className='mx-10'>
    <div className="flex-row inline-flex items-center space-x-2">
    <div className=" ">
    <img src={subtract} alt="" /></div>
    <div>
    <p className="text-lime-400">  Gautam  <span className="font-semibold">Sharma</span></p>

    </div>
    </div>

  </div> 

  <div className='flex-1 flex justify-center ml-24 space-x-5 '>
    <div className="inline-flex flex-row space-x-6">

        {/* <div className="bg-lime-400 rounded-full "> .
        </div> */}
        
        <ul className="rounded-full  text-wrap"> <a href="https://www.linkedin.com/in/gautam-sharma-560554198/"><FaLinkedinIn className="hover:text-lime-400 text-gray-400" size={25} /> </a> </ul>

        <ul className="rounded-full  text-wrap"> <a href="https://www.behance.net/gautamsharma18"><IoLogoBehance className="hover:text-lime-400 text-gray-400" size={25} /> </a>  </ul>
        <ul className="rounded-full  text-wrap"> <a href="https://www.facebook.com/"><FaFacebook className="hover:text-lime-400 text-gray-400" size={25} /> </a>  </ul>


    </div>
   

  </div>
</nav>
  )

}

