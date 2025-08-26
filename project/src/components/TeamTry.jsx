import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TeamTry() {
    return (
        <>
            <div className="flex gap-8 flex-col font-montserrat text-center">
                <div>
                    <h3 className="text-[#252B42] text-2xl font-bold">Start your 14 days free trial</h3>
                </div>
                <div>
                    <p className="text-[#737373] text-[14px] max-w-xl m-auto">
                        Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent.
                    </p>
                </div>
                <div>
                    <button className="text-white bg-[#23A6F0] px-4 py-2 rounded hover:border-2 hover:border-[#23A6F0] hover:bg-white hover:text-[#23A6F0]">
                        Try it free now
                    </button>
                </div>
                <div className="flex justify-center gap-6 text-2xl">
                    <a href="#" className="text-[#23A6F0] hover:scale-110 transition-transform">
                        <FaTwitter />
                    </a>
                    <a href="#" className="bg-[#252B42] text-white hover:scale-110 transition-transform">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-black hover:scale-110 transition-transform">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-white bg-[#0A66C2] hover:scale-110 transition-transform">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </>
    )
}
