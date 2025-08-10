import { useState } from 'react'
import profile from '../images/header-img/profile.png'
import search from '../images/header-img/search.png'
import shoppingCard from '../images/header-img/shopping-card.png'
import menu from '../images/header-img/menu.png'
import contact from '../images/header-img/contact.png'
import home from '../images/header-img/home.png'
import pricing from '../images/header-img/pricing.png'
import product from '../images/header-img/product.png'
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
import { useNavigate, Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';

export default function Header() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [shop, setShop] = useState(false);
    const [pages, setPages] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        setVisible((prev) => !prev);
    };
    const shopToggle = (e) => {
        e.preventDefault();
        setShop((prev) => !prev);
        setPages(false);
    }
    const pagesToggle = (e) => {
        e.preventDefault();
        setPages((prev) => !prev);
        setShop(false);
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
                <div className='flex justify-around pt-4 pb-4 md:hidden'>
                    <h3 onClick={() => navigate('/')} className='font-bold text-2xl text-[#252B42] cursor-pointer'>Bandage</h3>
                    <div className='flex items-center gap-6'>
                        <a href=""><img src={profile} alt="" /></a>
                        <a href=""><img src={search} alt="" /></a>
                        <a href=""><img src={shoppingCard} alt="" /></a>
                        <a href="" onClick={handleToggle}><img src={menu} alt="" /></a>
                    </div>
                </div>
                {/*web */}
                <div className='hidden md:flex justify-around max-w-[1042px] mx-auto gap-16'>
                    <div className='flex gap-32 flex-1/2 px-8 items-center'>
                        <h3 onClick={() => navigate('/')} className='font-bold text-2xl text-[#252B42] cursor-pointer'>Bandage</h3>
                        <div className='flex items-center gap-6'>
                            <a href="" onClick={() => navigate('/')}><img src={homeweb} alt="" /></a>
                            <a href="" onClick={shopToggle}><img src={shopweb} alt="" /></a>
                            <a href="" onClick={() => navigate('/about')}><img src={aboutweb} alt="" /></a>
                            <a href=""><img src={blogweb} alt="" /></a>
                            <a href="" onClick={() => navigate('/contact')}><img src={contactweb} alt="" /></a>
                            <a href="" onClick={pagesToggle}><img src={pagesweb} alt="" /></a>
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <div className='flex gap-4 items-center'>
                            <img src={profileweb} alt="" />
                            <a href="" onClick={() => navigate('/signup')} className='font-[700] text-[14px] text-[#23A6F0]'>Login</a>
                            <p className='text-[#23A6F0] font-[700] text-[14px]'>/</p>
                            <a href="" onClick={() => navigate('/signup')} className='font-[700] text-[14px] text-[#23A6F0]'>Register</a>
                        </div>
                        <div className='flex'>
                            <a href=""><img src={searchweb} alt="" /></a>
                            <a href=""><img src={shoppingcardweb} alt="" /></a>
                            <a href=""><img src={likesweb} alt="" /></a>
                        </div>
                    </div>

                </div>
                {shop && (
                    <div className='absolute bg-white top-[134px] left-[550px] flex gap-16 z-10 pl-10 pr-32 pb-8 pt-4'>
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

                {pages && (
                    <div className='absolute bg-gray-100 top-[134px] left-[810px] flex gap-16 z-10 pl-4 pr-16 pb-6 pt-4 rounded-xl'>
                        <div className='flex flex-col gap-6'>
                            <a href="" onClick={() => navigate('/')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink/> Home Page</a>
                            <a href="" onClick={() => navigate('/shop')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink/>Shop Page</a>
                            <a href="" onClick={() => navigate('/about')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink/>About Us</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink/>Blog</a>
                            <a href="" onClick={() => navigate('/contact')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink/>Contact</a>
                            <a href="" onClick={() => navigate('/team')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink/>Our Team</a>
                        </div>
                    </div>
                )}
                {visible && (
                    <div className='flex flex-col gap-8 justify-center items-center pb-8'>
                        <Link to="/">
                        <h3 className='text-gray-500 text-[28px] font-semibold'>Home</h3>
                        </Link>
                        <Link to="/shop">
                        <h3 className='text-gray-500 text-[28px] font-semibold'>Product</h3>
                        </Link>
                        <Link to="/team">
                        <h3 className='text-gray-500 text-[28px] font-semibold'>Our Team</h3>
                        </Link>
                        <a href="" onClick={() => navigate('/about')}>
                        <h3 className='text-gray-500 text-[28px] font-semibold'>About Us</h3>
                        </a>
                        <a href="" onClick={() => navigate('/contact')}>
                        <h3 className='text-gray-500 text-[28px] font-semibold'>Contact</h3>
                        </a>
                        <div className='flex items-center gap-2'>
                            <a href="" onClick={() => navigate('/signup')}>
                        <h3 className='bg-[#23A6F0] text-white text-[28px] font-semibold py-2 px-4 rounded-2xl hover:text-[#23A6F0] hover:bg-white hover:border-2'>Login</h3>
                        </a>
                        <p className='text-3xl text-[#23A6F0]'>/</p>
                        <a href="" onClick={() => navigate('/signup')}>
                        <h3 className='bg-[#23A6F0] text-white text-[28px] font-semibold py-2 px-4 rounded-2xl hover:text-[#23A6F0] hover:bg-white hover:border-2'>Register</h3>
                        </a>
                        </div>
                        
                    </div>
                )}


            </header>
        </>
    );
}