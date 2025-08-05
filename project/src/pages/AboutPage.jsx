import Footer from "../layout/Footer";
import Header from "../layout/Header";
import aboutBanner from "../images/aboutPage-img/about-banner.jpg"
import { FaArrowRight } from 'react-icons/fa';
export default function AboutPage() {
    return (
        <>
            <Header />
            <div className="relative bg-cover bg-[position:50%_60%] bg-no-repeat min-h-screen pt-20 "
                style={{ backgroundImage: `url(${aboutBanner})` }}>
                <div className="absolute inset-0 bg-black opacity-70">
                </div>

                <div className="flex flex-wrap gap-24 justify-around items-center pb-16 pl-20">
                    {/* sol */}
                    <div className="z-99 flex flex-col gap-8">
                        <hr className="bg-[#252B42] text-[#252B42] h-1 max-w-40" />
                        <h3 className="text-white font-bold text-3xl max-w-70">I'm Fatih ALKAN, a Software Engineer</h3>
                        <p className="text-gray-300 max-w-90 max-[768px]:max-w-[70%]">I am an aspiring full-stack developer with a growth mindset, eager to acquire new skills and constantly improve myself through new challenges. I graduated from Bülent Ecevit University with a degree in Computer Engineering. I aim to apply the theoretical knowledge I gained during my education into real-world projects.</p>
                    </div>
                    {/* sağ */}
                    <div className="z-99 flex flex-col gap-8 max-[768px]:max-w-[90%]">
                        <div className="flex flex-col gap-8 max-w-90 ">
                            <h3 className="text-white font-bold text-xl">ABOUT ME</h3>
                            <p className="text-gray-300 max-[768px]:max-w-[70%]">I am an aspiring full-stack developer with a growth mindset, eager to acquire new skills and constantly improve myself through new challenges. I graduated from Bülent Ecevit University with a degree in Computer Engineering...</p>
                            <a href="" className=" text-white bg-gray-500 max-w-32 p-2 font-bold flex items-center gap-2 ">Learn More <FaArrowRight /></a>
                            <hr className="max-[768px]:max-w-[70%]"/>
                        </div>
                        <div className="flex flex-col gap-8 max-w-90 ">
                            <h3 className="text-white font-bold text-xl">MY WORK</h3>
                            <p className="text-gray-300 max-[768px]:max-w-[70%]">Currently, I am participating in the Workintech Fullstack Development Program, where I was selected among 2400+ applicants. This program is helping me strengthen my skills in modern web technologies through hands-on learning and collaborative projects.
                            </p>
                            <a href="" className="text-white bg-gray-500 w-52 p-2 font-bold flex items-center gap-2">BROWSE PORTFOLIO <FaArrowRight /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}