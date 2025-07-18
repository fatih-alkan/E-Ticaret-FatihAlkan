import summerBanner from '../images/header-img/summer-banner.png'
import summerBanner1 from '../images/header-img/summer-banner1.png'
import { useState } from 'react'
const banners = [summerBanner, summerBanner1];
export default function Summer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
        const handlePrev = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? banners.length - 1 : prevIndex - 1
            );
        };
    
        const handleNext = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        };
    return (
        <>
            <div className="relative w-full h-[1190px] bg-cover bg-center bg-[#23856D] text-white  flex flex-col justify-center items-center text-center gap-4 md:flex-row md:h-[700px] md:justify-around">
                <div>
                <p className="mt-40">SUMMER 2020</p>
                <div className='flex flex-col gap-5 items-center'>
                    <div>
                        <h2 className="text-4xl font-bold mt-2 md:text-7xl">Vita Classic</h2>
                        <h2 className="text-4xl font-bold md:text-7xl">Product</h2>
                    </div>
                    <p className="mt-4 text-m max-w-[280px] text-white text-center">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    
                </div>

                <div onClick={handlePrev} className="absolute left-4 top-[42%] transform -translate-y-1/2 text-7xl cursor-pointer">
                    &lt;
                </div>
                <div onClick={handleNext} className="absolute right-4 top-[42%] transform -translate-y-1/2 text-7xl cursor-pointer">
                    &gt;
                </div>
                <div className='flex flex-col md:flex-row md:items-center md: gap-4'>
                <span className="font-bold text-2xl text-white">$16.48</span>
                <button className=" bg-green-500 text-white font-bold mt-4 px-14 py-3 rounded hover:bg-green-600 transition">
                    ADD TO CART
                </button>
                </div>
                </div>
                
                
                <img src={banners[currentIndex]} alt="" className='max-w-[400px]'/>
            </div>
        </>
    );
}