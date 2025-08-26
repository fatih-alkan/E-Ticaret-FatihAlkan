import contactBanner from '../images/contactPage-img/contact-banner.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function AboutBanner() {

    return (
        <>
            <div className="relative w-full h-[800px] bg-cover bg-center bg-white  flex flex-col items-center md:flex-row gap-6 md:max-w-[1124px] md:flex-1/2 md:justify-around md:m-auto md:max-h-[700px] font-montserrat max-[768px]:text-center">
                <div className='flex flex-col gap-4'>
                    <p className=" text-gray-700 font-bold md:text-2xl mt-16 md:mt-0">CONTACT US</p>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className="md:text-7xl text-5xl font-bold mt-2 text-gray-700">Get in touch today!</h2>
                        </div>
                        <p className="mt-4 text-m max-w-[280px] text-[#737373] max-[768px]:m-auto">
                            We know how large objects will act, but things on a small scale.
                        </p>
                    </div>

                    <div className='flex flex-col gap-2 font-bold'>
                        <h3>Phone ; +451 215 215 </h3>
                        <h3>Fax : +451 215 215 </h3>
                    </div>
                    <div className="flex gap-6 text-2xl max-[768px]:m-auto">
                        <a href="#" className="text-[#252B42] hover:scale-110 transition-transform">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-[#252B42] text-white hover:scale-110 transition-transform">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-black hover:scale-110 transition-transform">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-white bg-[#252B42] hover:scale-110 transition-transform">
                            <FaLinkedinIn />
                        </a>
                    </div>

                </div>
                <div className=''>
                    <img src={contactBanner} alt="" />
                </div>

            </div>
        </>
    );
}