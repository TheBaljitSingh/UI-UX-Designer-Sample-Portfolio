import { IoFlash } from "react-icons/io5";
import { CiPen } from "react-icons/ci";


const gautam = require("./gautam.jpg");
const group15 = require("./Group15.png");
const group16 = require("./Group16.png");
const mode = require("./Mode.png");
const vector61 = require("./Vector61.png")





export default function Home(){

    return(
        <div className="h-screen max-w-screen">
            <div className="absolute inset-0 flex mt-32 opacity font-normal  justify-center z-2">
                <div className="inline-block">
                    <h1 className="text-lime-700  text-9xl select-none z-20 opacity-5 ">FEARLESS</h1>
                </div>
            </div>

            <div className="ml-32 mr-32 text-white mt-12 z-20">

                <div className="flex justify-center items-center ">
               <img src={mode} alt="" />

                </div>

                <div className="flex justify-center items-center flex-col space-y-4 mt-24">
                    <h1 className="text-8xl  font-semibold text-lime-400 z-10">Gautam Sharma</h1>
                    <div className=" ml-2">
                         <p className="font-sans text-2xl  text-gray-300">UI/UX Designer</p>
                        <img className="mt-0 ml-20 w-20  " src={vector61} alt="" />

                    </div>
                   
                </div>
                <div className="absolute ml-72">
                            <CiPen size={42} />
                        </div>

                <div >
                    <div className="flex justify-between">

                    <div className=" mt-8 mb-64 ml-20 text-center space-y-1 flex items-center justify-center flex-col text-gray-300 "> 
                            <img src={group15} alt="" />
                            <p className=" font-sans text-xl">About Me</p>
                            <p className="w-52 text-sm  font-extralight ">UI/UX Designer who specialize in designing intuitive & elegant solutions from complex problems.</p>
                        
                    </div>
                   
                    <div className="mt-28 mr-6 "><img className="rounded-full h-40 border-4 border-black" src={gautam} alt="" /></div>
                    <div className="mt-44 mr-12 text-center space-y-1 flex items-center justify-center flex-col text-gray-300">
                        <img src={group16} alt="" />
                        <p className=" text-xl font-sans">Favourite Queue</p>
                        <p className="w-52 text-sm font-extralight">Chippi Chippi Chappa Chappa Dobbi Dobbi Dabba Dabba !!!</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )


}

