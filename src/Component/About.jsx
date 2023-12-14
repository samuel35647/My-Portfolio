// import myPic from "../assets/toye.jpg";
import myPic from "../assets/Idan.jpg"
// import CV from "../assets/BAMIGBALA Ezekiel Adetoyese Dev Cv.pdf";
import CV from "../assets/JagoCV.pdf";
import { FiFileText} from "react-icons/fi"

const About = () => {
    return (
        <div 
            id="about" 
            className="flex justify-around gap-x-5 py-20 md:flex-col md:items-center md:gap-y-10">
            {/* My Picture */}
            <img 
                src={myPic} 
                alt="Front End Developer" 
                className="w-[303px] rounded-md sm:w-[270px] md:w-[370px]"
            />
            {/* About Me  */}
            <div className="w-1/2 flex flex-col justify-between md:gap-y-8">
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-3 flex justify-center items-center">
                        I am Full-stack Developer
                    </h2>

                    <p className="text-xl first-letter:ml-10 first-letter:text-2xl text-justify">
                        Enthusiastic and detail-oriented front-end 
                        developer with a passion for creating dynamic 
                        and responsive web applications. Proficient in 
                        HTML, CSS, and JavaScript, with hands-on experience 
                        using modern front-end frameworks and libraries. 
                        A quick learner with a strong commitment to staying 
                        current with evolving technologies.
                    </p>

                    {/* <p>
                        Passionate and detail-oriented UX/UI 
                        designer with a keen eye for user-centric 
                        design and a strong foundation in creating 
                        engaging and intuitive digital experiences. 
                        Proficient in design tools such as Adobe XD 
                        and Figma, with a focus on delivering 
                        aesthetically pleasing and functional 
                        solutions. A quick learner committed to 
                        staying abreast of design trends and 
                        emerging technologies.
                    </p> */}
                </div>
                {/* download cv */}
                <a href={CV}
                    download={""}
                    className="w-[200px] h-[40px] bg-slate-600 text-white flex justify-around items-center rounded-md text-sm">
                    <span>Download CV (PDF)</span>
                    <FiFileText />
                </a>
                {/* Personal Details */}
                <div className="flex justify-between mb-10 md:flex-col md:gap-y-3 text-sm items-left">
                    <ul className="font-semibold uppercase">
                        <li>Name:</li>
                        <li>NickName:</li>
                    </ul>

                    <ul>
                        <li className="md:text-xl md:font-bold">Samuel Kayode</li>
                        <li className="md:text-xl md:font-bold">Aremo Jago</li>
                    </ul>

                    <ul className="font-semibold uppercase">
                        <li>Email:</li>
                        <li>Address:</li>
                    </ul>

                    <ul>
                        <li className="md:text-xl md:font-bold">Akanjisamuel708@gmail.com</li>
                        <li className="md:text-xl md:font-bold">Nigeria</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About