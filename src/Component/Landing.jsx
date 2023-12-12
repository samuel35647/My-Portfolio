import {FaHandsClapping} from "react-icons/fa6";
import {FiLinkedin, FiInstagram, FiTwitter, } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Video from "../assets/New folder/bgg.mp4";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
    return (
        <div id="home" className="h-screen w-full flex justify-center items-center"> 
            {/* Video  */}
            <video src={Video} 
            autoPlay 
            loop 
            muted 
            className="absolute h-full w-[1500px] top-0 object-cover z-[-1]"></video>
            {/* social icons */}

            <div className="absolute left-5 flex flex-col gap-y-5 text-white font-semibold text-lg">
                <a href="#">
                    <BsWhatsapp className="hover:text-red-700 hover:text-2xl" />
                </a>

                <a href="#">
                    <FiLinkedin className="hover:text-red-700 hover:text-2xl"/>
                </a>

                <a href="#">
                    <FiInstagram className="hover:text-red-700 hover:text-2xl"/>
                </a>

                <a href="#">
                    <FiTwitter className="hover:text-red-700 hover:text-2xl"/>
                </a>
            </div>
            {/* hero  */}
            <div>
                <h1 className="flex flex-col items-center gap-y-4 text-gray-700">
                    <span className="text-2xl flex items-center gap-y-5 font-normal text-white">
                        Hello &ldquo; <FaHandsClapping />
                    </span>
                    <span className="text-5xl font-bold uppercase text-white sm:text-xl md:text-2xl">
                        I am a 
                    </span>
                    <TypeAnimation sequence={[
                        'Front End Developer...',
                        3000,
                        'UX/UI Designer...',
                        3000,
                        ]}
                        speed={50}
                        className="uppercase font-extrabold text-5xl text-red-700 sm:text-xl md:text-2xl"
                        wrapper="span"
                        repeat={Infinity}                        
                    /> 
                    <button 
                    className="block w-24 bg-white mt-10 text-black font-bold px-2 py-2 border border-black rounded-2xl hover:bg-black hover:text-white">
                        Hire Me
                    </button>
                </h1>
            </div>
        </div>
    )
}

export default Landing