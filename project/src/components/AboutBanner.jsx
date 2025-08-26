import aboutBanner from '../images/aboutPage-img/about-banner.png'

export default function AboutBanner() {

    return (
        <>
            <div className="relative w-full h-[800px] bg-cover bg-center bg-white  flex flex-col items-center md:flex-row gap-6 md:max-w-[1124px] md:flex-1/2 md:justify-around md:m-auto md:max-h-[700px] font-montserrat">
                <div className='flex flex-col gap-4'>
                    <p className=" text-gray-700 font-bold md:text-2xl mt-16 md:mt-0">ABOUT COMPANY</p>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className="md:text-7xl text-5xl font-bold mt-2 text-gray-700">ABOUT US</h2>
                        </div>
                        <p className="mt-4 text-m max-w-[280px] text-[#737373]">
                            We know how large objects will act, but things on a small scale.
                        </p>
                    </div>

                    <div className='flex gap-8'>
                        <button className=" bg-[#23A6F0] text-white mt-2 font-bold px-10 py-3 rounded hover:bg-white hover:text-[#23A6F0] hover:border-2 transition">
                            Get Quote Now
                        </button>
                    </div>

                </div>
                <div className=''>
                    <img src={aboutBanner} alt=""  />
                </div>

            </div>
        </>
    );
}