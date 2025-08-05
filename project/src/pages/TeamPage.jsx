import Footer from "../layout/Footer";
import Header from "../layout/Header";
import personals from "../data/personals";

import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

export default function TeamPage() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center gap-8 mt-8 bg-[#c5e9fe] pt-16 pb-16">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="text-[#252B42] font-bold text-3xl">MEET OUR TEAM</h3>
                    <hr className="bg-[#252B42] text-[#252B42] h-2 w-40"/>
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                    {personals.map((person, index) => (
                        <div key={index} className="relative hover:bottom-4 flex flex-col bg-[#252B42] p-6 rounded-2xl text-center gap-2">
                            <img className="w-40 h-40 rounded-full object-cover" src={person.image} alt={person.name} />
                            <h4 className="font-bold text-[#23A6F0] text-xl">{person.name}</h4>
                            <p className="text-gray-300">{person.role}</p>
                            <div className="flex gap-4 justify-center">
                                <div className="bg-[#23A6F0] text-white p-2 rounded-2xl hover:bg-white hover:text-[#252B42]">
                                    <FiPhone />
                                </div>
                                <div className="bg-[#23A6F0] text-white p-2 rounded-2xl hover:bg-white hover:text-[#252B42]">
                                    <HiOutlineMail />
                                </div>
                                <div className="bg-[#23A6F0] text-white p-2 rounded-2xl hover:bg-white hover:text-[#252B42]">
                                    <FaLinkedin />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
