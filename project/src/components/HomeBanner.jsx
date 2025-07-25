import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import homeBanner from '../images/header-img/home-banner.jpg';
import homeBanner1 from '../images/header-img/home-banner1.png';
import homeBanner2 from '../images/header-img/home-banner2.png';

const banners = [homeBanner, homeBanner1, homeBanner2];

export default function HomeBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
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
        <div
            className="relative w-full h-[770px] bg-cover bg-center text-white flex flex-col justify-center items-center text-center gap-4"
            style={{ backgroundImage: `url(${banners[currentIndex]})` }}
        >
            <p className="font-bold uppercase tracking-wide">Summer 2020</p>
            <div>
                <h2 className="text-4xl font-bold mt-2">NEW</h2>
                <h2 className="text-4xl font-bold">COLLECTION</h2>
            </div>

            <div onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-7xl cursor-pointer">
                &lt;
            </div>
            <div onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-7xl cursor-pointer">
                &gt;
            </div>

            <p className="mt-4 text-m max-w-[280px] text-white">
                We know how large objects will act, but things on a small scale.
            </p>

            <button
                onClick={() => navigate('/shop')}
                className="bg-green-500 text-white font-bold mt-4 px-14 py-3 rounded hover:bg-green-600 transition cursor-pointer"
            >
                SHOP NOW
            </button>
        </div>
    );
}
