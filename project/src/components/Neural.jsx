import neuralBanner from '../images/header-img/neural-banner.png'

export default function Neural() {
    
    return (
        <>
            <div className="relative w-full h-[900px] bg-cover bg-center bg-white  flex flex-col justify-center items-center text-center gap-4 md:flex-row-reverse md:max-w-[1124px] md:flex-1/2 md:justify-around md:m-auto md:max-h-[400px]">
                <div className='flex flex-col'>
                    <p className=" text-[#BDBDBD] font-bold mt-30">SUMMER 2020</p>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className="text-4xl font-bold mt-2">Part of the</h2>
                            <h2 className="text-4xl font-bold">Neural</h2>
                            <h2 className="text-4xl font-bold">Universe</h2>
                        </div>
                        <p className="mt-4 text-m max-w-[280px] text-[#737373]">
                            We know how large objects will act, but things on a small scale.
                        </p>
                    </div>

                    <div className='flex gap-8'>
                    <button className=" bg-[#23A6F0] text-white mt-2 font-bold px-10 py-3 rounded hover:bg-white hover:text-[#23A6F0] hover:border-2 transition md:bg-[#2DC071] md:hover:text-[#2DC071]">
                        BUY NOW
                    </button>
                    <button className=" border-2 bg-white text-[#23A6F0] mt-2 font-bold px-10 py-3 rounded hover:bg-[#23A6F0] hover:text-white transition md:text-[#2DC071] md:hover:bg-[#2DC071]">
                        Learn More
                    </button>
                    </div>
                    
                </div>

                <img src={neuralBanner} alt="" className='md:w-1/2 ' />
            </div>
        </>
    );
}