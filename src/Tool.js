
import { PiStarFourFill } from "react-icons/pi";
import { TbExternalLink } from "react-icons/tb";

import { FaLinkedinIn,FaTwitter,FaFacebook } from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";


const externalLink = require("./external_link.png");
const subtract = require("../src/Subtract.png");
const emailLogo = require("../src/email-logo-png.png");
// const vector68 = require("../src/Vector68.png")



export default function Tool(){


      


   return (
    <div className="">
        {/* //heading */}
        <div className="h-screen ml-32 mr-32 -mt-12">
            {/* <h2>Favourite Tools</h2> */}
            <div class="flex items-center">
            <div class="flex-1 border-t-2 border-gray-200">
                
            </div>
            <div className="flex justify-center items-center p-4 text-gray-500 ">
                <PiStarFourFill size={32} />

            </div>
            <h2 className="p-2 text-4xl text-lime-400 w-64 ">Favourite Tools</h2>

            {/* <span class="px-3 text-gray-500 bg-white">Favourite Tool</span> */}
            {/* <div class="flex-1 border-t-2 border-gray-200"></div> */}
            </div>

            <div className="list-decimal marker:text-lime-400 flex flex-row space-x-2 text-3xl text-gray-300">
                <li> Adobe Photoshop</li> <div className="text-lime-400" >|</div>
                <li> Figma</li>  <div  className="text-lime-400">|</div>
                <li> Adobe XD</li>  <div  className="text-lime-400">|</div>
                
                <li> Power Bi</li> 
            </div>

          

            
            <div class="flex items-center mt-24">
            <div class="flex-1  border-gray-200 w-1/3">
                
            </div>
            <div className="flex justify-center items-center p-4 text-gray-500   ">
                <PiStarFourFill size={32} />

            </div>
            <h2 className=" text-4xl text-lime-400 w-64  text-center ">Latest Project</h2>
            <div class="flex-1 border-t-2 border-gray-200"></div>

            <div class="flex-1 border-t-2 border-gray-200"></div>
            <div class="flex-1 border-t-2 border-gray-200"></div>

            </div>

            {/* projects adding start clicable link */}
            {/* <div  className={showDiv.id==="Project"? "Project": "hidden" } > */}
            <div className="text-white marker:text-lime-400 list-decimal flex justify-between items-center"> 
                
                <div className="space-y-2">
                    <div className=" space-x-2 inline-flex">
                        <p className="text-4xl text-gray-300"><span className="text-lime-400">01.</span> Projection 2024</p>
                        <p className="text-sm text-gray-500 mt-2 flex justify-center items-center">Freelance</p>
                    </div>
                    <p className="font-thin flex-wrap w-1/2 line-clamp-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem sed id ac tortor. In sem scelerisque neque, faucibus mattis. Vulputate ut quisque id eget. Amet nisl pretium aliquet in bibendum eu tincidunt egestas nec.</p>
                    <div>
                    <button className="inline-flex text-lg space-x-2 mt-2 items-center " ><p className=""><a  className="hover:text-lime-400 text-gray-300" target="_blank" href="https://www.projections.co.in/about-us">See Project</a></p>  <div className=" mt-1 hover:text-lime-400"><img src={externalLink} alt="" /> </div></button>
                    </div>
                </div>
                <div className="mt-16">
                    {/* colour box */}
                    <div className="absolute ml-2 mt-2 rounded-xl bg-yellow-300 h-80 w-80">
                    </div>
                    <div className="relative border-black  border-r-4  border-b-4 rounded-xl bg-violet-600 h-80 w-80">
                    </div>
                </div>


            </div>

            {/* </div> */}

            <hr className="m-12" />

            <div className="text-white marker:text-lime-400 list-decimal flex justify-center items-center"> 

                <div className="mt-2 flex-1">
                    {/* colour box */}
                    <div className="absolute -ml-2 mt-2 rounded-xl bg-lime-400 h-80 w-80">
                    </div>
                    <div className="relative border-black   border-l-4  border-b-4 rounded-xl bg-yellow-500 h-80 w-80">
                    </div>
                </div>
                
                <div className="space-y-2  ml-80 ">
                    <div className=" space-x-2 inline-flex">
                        <p className="text-4xl text-gray-300"> <span className="text-lime-400">02.</span>Project 2</p>
                        <p className="text-sm text-gray-500 mt-2 flex justify-center items-center">case study</p>
                    </div>
                    <p className="font-thin flex-wrap w-1/2 line-clamp-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem sed id ac tortor. In sem scelerisque neque, faucibus mattis. Vulputate ut quisque id eget. Amet nisl pretium aliquet in bibendum eu tincidunt egestas nec.</p>
                    <div>
                    <button className="inline-flex text-lg space-x-2 items-center mt-2  " ><p className=""><a  className="hover:text-lime-400 text-gray-300" target="_blank" href="https://www.projections.co.in/about-us">See Project</a></p>  <div className=" mt-1 hover:text-lime-400"><img src={externalLink} alt="" /> </div></button>
                    </div>
                </div>
                


            </div>

            {/* certification */}

            <div>

                <div class="flex items-center mt-10">
                <div class="flex-1 border-t-2 border-gray-200">
                    
                </div>
                <div className="flex justify-center items-center p-4 text-gray-500 ">
                    <PiStarFourFill size={32} />

                </div>
                <h2 className="p-2 text-4xl text-lime-400 w-64 ">Certificates</h2>

                {/* <span class="px-3 text-gray-500 bg-white">Favourite Tool</span> */}
                {/* <div class="flex-1 border-t-2 border-gray-200"></div> */}
                </div>

            <div className="font-normal text-gray-300 text-3xl space-y-4 hover:cursor-pointer">
                <p ><span className="text-lime-400 ">01.</span> User Interface Design Essentials - UI/UX Desgn</p>
                <p><span  className="text-lime-400">02.</span> Avocademy Design Master Class - Agile for UX/UI Designer</p>
                <p><span  className="text-lime-400">03.</span> Avocademy Design Master Class - Advance Figma</p>
            </div>


            </div>

            <div className="vh-90">

                 
                <div class="flex items-center mt-24">
                    
                    <div className="flex justify-center items-center p-4 text-gray-500   ">
                        <PiStarFourFill size={32} />

                    </div>
                    <h2 className=" text-4xl text-lime-400 w-64  text-center ">Get in Touch</h2>
                    <div class="flex-1 border-t-2 border-gray-200"></div>

                    <div class="flex-1 border-t-2 border-gray-200"></div>
                    <div class="flex-1 border-t-2 border-gray-200"></div> 
                    <div class="flex-1 border-t-2 border-gray-200"></div>


                </div>

                {/* contact now start */}
                <div className="flex justify-between items-center text-white " >
                  


                        <div class="flex flex-col gap-6 w-1/2 mt-12 ml-12 text-xl ">

                            <div class="relative h-11 w-full min-w-[200px] ">
                                <input placeholder="Your Name"
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-lime-400 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0" />
                                <label
                                class=" after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-300 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-300 peer-focus:after:scale-x-100 peer-focus:after:border-lime-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Name
                                </label>
                            </div>

                            <div class="relative h-11 w-full min-w-[200px] ">
                                <input placeholder=""
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal  text-gray-300 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                                <label
                                class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-300 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-300 peer-focus:after:scale-x-100 peer-focus:after:border-lime-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                                </label>
                            </div>
                            <div class="relative h-11 w-full min-w-[200px]">
                                <input placeholder=""
                                class="peer  h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                                <label
                                class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-300 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-300 peer-focus:after:scale-x-100 peer-focus:after:border-lime-400 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Message
                                </label>
                            </div>

                            <div className=" rounded-lg  bg-lime-600 hover:cursor-pointer text-center">
                                <button className="p-2 text-gray-300 font-semibold hover:text-gray-200">Send Now</button>
                            </div>
                          
  
                        </div>

                    <div >

                        <div className="mt-16 ">
                        {/* colour box */}
                        <div className="absolute rounded-xl ml-2 mt-2 bg-yellow-500 h-80 w-80">
                        </div>
                        <div className="relative  border-black  border-r-4  border-b-4 rounded-xl bg-violet-600 h-80 w-80 flex items-center justify-center">
                            <img src={emailLogo} alt="" />
                           
                            
                            
                        </div>
                        
                        
                        </div>

                       
                      
                        


                    </div>
                    
                </div>

                <hr className="mt-20 h-1 " />

            </div>

 
                
            <footer className='h-20 p-5 flex justify-between items-center shadow-xl text-gray-400 w-full mt-5   '>
        <div className='flex-1 flex-start justify-center ml-32 space-x-10'>
            <div className="flex-row inline-flex space-x-2 mt-2  items-center">
            <div className="">
            <img src={subtract} alt="" />
            </div>
            <div>
                <p className="cursor-pointer text-lime-400">Gautam <span className="font-semibold">Sharma</span></p>
            </div>
            </div>
        </div>
        <div className=''>
            <p className="w-60 inline-flex items-center  justify-center space-x-1 ">Developed By - <span className="font-semibold hover:text-lime-400 hover:cursor-pointer"> Baljit Singh</span>  <a className=" " target="_blank" href="https://www.linkedin.com/in/thebaljitsingh/"> <FaLinkedin  className="hover:text-gray-300" size={20} color="" /></a> 
                </p>
            
           
           

            {/* */}
        </div>
        <div className='flex-1 flex justify-center ml-24 space-x-5'>
            <div className="inline-flex flex-row space-x-2">
            <ul className="rounded-full text-wrap"> <a href="/#"> <FaLinkedinIn size={25} color="gray" /></a></ul>
            <ul className="rounded-full text-wrap"><a href="/#"><IoLogoBehance size={25} color="gray" /></a></ul>
            <ul className="rounded-full text-wrap"><a href="/#"><FaFacebook size={25} color="gray" /></a></ul>
            </div>
        </div>
            </footer>


        </div>

    </div>
   )


}

