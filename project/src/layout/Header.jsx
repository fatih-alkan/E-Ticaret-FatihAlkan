import { useState } from 'react'
import profile from '../images/header-img/profile.png'
import search from '../images/header-img/search.png'
import shoppingCard from '../images/header-img/shopping-card.png'
import menu from '../images/header-img/menu.png'
import contact from '../images/header-img/contact.png'
import home from '../images/header-img/home.png'
import pricing from '../images/header-img/pricing.png'
import product from '../images/header-img/product.png'
import homeBanner from '../images/header-img/home-banner.jpg'
import homeBanner1 from '../images/header-img/home-banner1.png'
import homeBanner2 from '../images/header-img/home-banner2.png'
import phone from '../images/header-img/phone.png'
import message from '../images/header-img/message.png'
import insta from '../images/header-img/insta.png'
import face from '../images/header-img/face.png'
import youtube from '../images/header-img/youtube.png'
import twitter from '../images/header-img/twitter.png'
import homeweb from '../images/header-img/homeweb.png'
import shopweb from '../images/header-img/shopweb.png'
import aboutweb from '../images/header-img/aboutweb.png'
import contactweb from '../images/header-img/contactweb.png'
import blogweb from '../images/header-img/blogweb.png'
import pagesweb from '../images/header-img/pagesweb.png'
import profileweb from '../images/header-img/profileweb.png'
import searchweb from '../images/header-img/searchweb.png'
import shoppingcardweb from '../images/header-img/shoppingcardweb.png'
import likesweb from '../images/header-img/likesweb.png'
const banners = [homeBanner, homeBanner1, homeBanner2];
export default function Header() {
    const [visible, setVisible] = useState(false);
    const [shop, setShop] = useState(false);
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
    const handleToggle = (e) => {
        e.preventDefault();
        setVisible((prev) => !prev);
    };
    const shopToggle = (e) => {
        e.preventDefault();
        setShop((prev) => !prev);
    }
    return (
        <>
            <header className='flex gap-[30px] flex-col max-h-[1285px] w-full' >
                <div className='hidden md:flex justify-around w-full bg-[#252B42] h-[58px] text-white py-4 px-4 items-center'>
                    <div className='flex gap-8'>
                        <div className='flex gap-2'>
                            <img src={phone} alt="" className='w-6' />
                            <h6 className='text-[14px] font-[700]'>(225) 555-0118</h6>
                        </div>
                        <div className='flex gap-2'>
                            <img src={message} alt="" className='w-6' />
                            <h6 className='text-[14px] font-[700]'>michelle.rivera@example.com</h6>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-[14px] font-[700]'>Follow Us and get a chance to win 80% off</h6>
                    </div>
                    <div className='flex gap-2'>
                        <h6 className='text-[14px] font-[700]'>Follow Us :</h6>
                        <a href=""><img src={insta} alt="" /></a>
                        <a href=""><img src={youtube} alt="" /></a>
                        <a href=""><img src={face} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                    </div>
                </div>
                {/*mobil */}
                <div className='flex justify-around pt-4 md:hidden'>
                    <h3 className='font-bold text-2xl text-[#252B42]'>Bandage</h3>
                    <div className='flex items-center gap-6'>
                        <a href=""><img src={profile} alt="" /></a>
                        <a href=""><img src={search} alt="" /></a>
                        <a href=""><img src={shoppingCard} alt="" /></a>
                        <a href="" onClick={handleToggle}><img src={menu} alt="" /></a>
                    </div>
                </div>
                {/*web */}
                <div className='hidden md:flex justify-around '>
                    <div className='flex gap-32 flex-1/2 px-8 items-center'>
                        <h3 className='font-bold text-2xl text-[#252B42]'>Bandage</h3>
                        <div className='flex items-center gap-6'>
                            <a href=""><img src={homeweb} alt="" /></a>
                            <a href="" onClick={shopToggle}><img src={shopweb} alt="" /></a>
                            <a href=""><img src={aboutweb} alt="" /></a>
                            <a href=""><img src={blogweb} alt="" /></a>
                            <a href=""><img src={contactweb} alt="" /></a>
                            <a href=""><img src={pagesweb} alt="" /></a>
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <div className='flex gap-4 items-center'>
                            <img src={profileweb} alt="" />
                            <a href="" className='font-[700] text-[14px] text-[#23A6F0]'>Login / Register</a>
                        </div>
                        <div className='flex'>
                            <a href=""><img src={searchweb} alt="" /></a>
                            <a href=""><img src={shoppingcardweb} alt="" /></a>
                            <a href=""><img src={likesweb} alt="" /></a>
                        </div>
                    </div>

                </div>
                {shop && (
                    <div className='absolute bg-white top-41 left-80 flex gap-16 z-10 pl-10 pr-32 pb-8'>
                        <div className='flex flex-col gap-6'>
                            <div className='mb-4'>
                                <a href="" className='text-[#252B42] text-[14px] font-[700]'>Kadın</a>
                            </div>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Bags</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Belts</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Cosmetics</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Bags</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Hats</a>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='mb-4'>
                                <a href="" className='text-[#252B42] text-[14px] font-[700]'>Erkek</a>
                            </div>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Bags</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Belts</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Cosmetics</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Bags</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] '>Hats</a>
                        </div>
                    </div>
                )}


                {visible && (
                    <div className='flex flex-col gap-12 justify-center items-center'>
                        <a href=""><img src={home} alt="" /></a>
                        <a href=""><img src={product} alt="" /></a>
                        <a href=""><img src={pricing} alt="" /></a>
                        <a href=""><img src={contact} alt="" /></a>
                    </div>
                )}
                <div className="relative w-full h-[770px] bg-cover bg-center text-white  flex flex-col justify-center items-center text-center gap-4" style={{ backgroundImage: `url(${banners[currentIndex]})` }}>
                    <p className=" font-bold uppercase tracking-wide">Summer 2020</p>
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
                    <button className=" bg-green-500 text-white font-bold mt-4 px-14 py-3 rounded hover:bg-green-600 transition">
                        SHOP NOW
                    </button>
                </div>

            </header>
        </>
    );
}