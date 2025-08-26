import personals from "../data/personals";

import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

export default function TeamPage({ limit }) {
  const team = limit ? personals.slice(0, limit) : personals;

  return (
    <div className="flex flex-col items-center gap-8 mt-8 pt-16 pb-16 font-montserrat">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-[#252B42] font-bold text-4xl">MEET OUR TEAM</h2>
        <p className="text-[#737373] max-w-[450px] max-[768px]:max-w-[350px] text-[12px] text-center">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {team.map((person, index) => (
          <div
            key={index}
            className="relative flex flex-col w-72 p-8 rounded-2xl text-center gap-4 bg-white transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="w-48 h-48 mx-auto object-cover"
              src={person.image}
              alt={person.name}
            />
            <h4 className="font-bold text-[#252B42] text-2xl">{person.name}</h4>
            <p className="text-[#737373]">{person.role}</p>
            <div className="flex gap-4 justify-center">
              <div className="bg-[#23A6F0] text-white p-3 rounded-2xl hover:bg-white hover:text-[#252B42] transition-colors duration-300">
                <FiPhone />
              </div>
              <div className="bg-[#23A6F0] text-white p-3 rounded-2xl hover:bg-white hover:text-[#252B42] transition-colors duration-300">
                <HiOutlineMail />
              </div>
              <div className="bg-[#23A6F0] text-white p-3 rounded-2xl hover:bg-white hover:text-[#252B42] transition-colors duration-300">
                <FaLinkedin />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

