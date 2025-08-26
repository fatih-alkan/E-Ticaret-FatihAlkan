import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function TeamHeader() {


  return (
    <div className=" w-full mt-16 ">
      <div className="gap-6 flex flex-col items-center mx-auto my-8 h-[92px] max-w-[1042px] align-middle max-[768px]:text-center">
        <h3 className="font-[700] text-[16px] text-[#737373] my-auto">WHAT WE DO</h3>
        <h1 className="text-[#252B42] text-5xl font-bold">Innovation tailored for you</h1>
        <div className="flex items-center gap-2">
          <Link to="/" className="font-[700] text-[14px] text-[#252B42]">
            Home
          </Link>
          <FiChevronRight className="text-[#BDBDBD] text-lg" /> 
          <Link to="/shop" className="font-[700] text-[14px] text-[#BDBDBD]">
            Team
          </Link>
        </div>
      </div>
    </div>
  );
}
