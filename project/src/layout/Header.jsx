import { useState } from 'react'
import profile from '../images/header-img/profile.png'
import search from '../images/header-img/search.png'
import shoppingCard from '../images/header-img/shopping-card.png'
import menu from '../images/header-img/menu.png'
import phone from '../images/header-img/phone.png'
import message from '../images/header-img/message.png'
import insta from '../images/header-img/insta.png'
import face from '../images/header-img/face.png'
import youtube from '../images/header-img/youtube.png'
import twitter from '../images/header-img/twitter.png'
import { useNavigate, Link } from 'react-router-dom';
import { FaChevronDown, FaHeart, FaLink, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/reducers/clientSlice";
import md5 from 'blueimp-md5';
import { fetchCategories } from "../store/reducers/categorySlice";
import { useEffect } from "react";

export default function Header() {
    const { user } = useSelector((state) => state.client);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [shop, setShop] = useState(false);
    const [pages, setPages] = useState(false);
    const dispatch = useDispatch();
    const { list: categories } = useSelector((state) => state.categories);

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }
    }, [categories, dispatch]);
    useEffect(() => {
        console.log("Categories from Redux:", categories);
    }, [categories]);

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
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        window.location.href = "/login";
    };
    const avatarUrl = user?.email
        ? `https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}?d=identicon`
        : profile;
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
                        <a href=""><img src={avatarUrl} alt="" className='w-6' /></a>
                        {user && user.name ? (
                            <>
                                <span className='font-[500] text-[21px] text-[#23A6F0]'>{user.name}</span>
                            </>
                        ) : (
                            <>
                            </>
                        )}
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
                            <a href="" className='text-gray-500 text-[14px] font-bold hover:border-b-2' onClick={() => navigate('/')}>Home</a>
                            <a href="" className='text-gray-500 text-[14px] font-bold flex hover:border-b-2 items-center gap-2' onClick={shopToggle}>Shop <FaChevronDown/></a>
                            <a href="" className='text-gray-500 text-[14px] font-bold hover:border-b-2' onClick={() => navigate('/about')}>About</a>
                            <a href="" className='text-gray-500 text-[14px] font-bold hover:border-b-2'>Blog</a>
                            <a href="" className='text-gray-500 text-[14px] font-bold hover:border-b-2' onClick={() => navigate('/contact')}>Contact</a>
                            <a href="" className='text-gray-500 text-[14px] font-bold hover:border-b-2' onClick={pagesToggle}>Pages</a>
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <div className='flex gap-4 items-center'>
                            <img src={avatarUrl} alt="" className='w-4' />

                            {user && user.name ? (
                                <>
                                    <span className='font-[700] text-[14px] text-[#23A6F0]'>{user.name}</span>
                                    <p className='text-[#23A6F0] font-[700] text-[14px]'>/</p>
                                    <button
                                        onClick={handleLogout}
                                        className='text-[14px] text-red-500 font-[700] cursor-pointer'
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a onClick={(e) => { e.preventDefault(); navigate('/login'); }} className='font-[700] text-[14px] text-[#23A6F0] cursor-pointer'>Login</a>
                                    <p className='text-[#23A6F0] font-[700] text-[14px]'>/</p>
                                    <a onClick={(e) => { e.preventDefault(); navigate('/signup'); }} className='font-[700] text-[14px] text-[#23A6F0] cursor-pointer'>Register</a>
                                </>
                            )}
                        </div>

                        <div className='flex gap-8 items-center'>
                            <a href="" className='text-[#23A6F0] hover:opacity-80'><FaSearch/></a>
                            <a href="" className='text-[#23A6F0] hover:opacity-80'><FaShoppingCart/></a>
                            <a href="" className='text-[#23A6F0] hover:opacity-80'><FaHeart/></a>
                        </div>
                    </div>

                </div>
                {shop && (
                    <div className='absolute bg-white top-[134px] left-[550px] flex gap-16 z-10 pl-10 pr-22 pb-8 pt-4 shadow-lg rounded-lg'>

                        {/* Kadın kategorileri */}
                        <div className='flex flex-col gap-6'>
                            <div className='mb-4'>
                                <span className='text-[#252B42] text-[14px] font-[700]'>Kadın</span>
                            </div>
                            {categories
                                .filter(cat => cat.gender === "k")
                                .map(cat => (
                                    <a
                                        key={cat.id}
                                        href="#"
                                        className='flex items-center gap-2 text-[#737373] text-[14px] font-[700] hover:text-[#23A6F0] transition-all duration-200'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate(`/shop/${cat.gender}/${cat.title}/${cat.id}`);
                                        }}
                                    >
                                        <img
                                            src={cat.img}
                                            alt={cat.title}
                                            className='w-8 h-8 object-cover rounded-md hover:scale-110 transition-transform duration-200'
                                        />
                                        {cat.title}
                                    </a>
                                ))}
                        </div>

                        {/* Erkek kategorileri */}
                        <div className='flex flex-col gap-6'>
                            <div className='mb-4'>
                                <span className='text-[#252B42] text-[14px] font-[700]'>Erkek</span>
                            </div>
                            {categories
                                .filter(cat => cat.gender === "e")
                                .map(cat => (
                                    <a
                                        key={cat.id}
                                        href="#"
                                        className='flex items-center gap-2 text-[#737373] text-[14px] font-[700] hover:text-[#23A6F0] transition-all duration-200'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate(`/shop/${cat.gender}/${cat.title}/${cat.id}`);
                                        }}
                                    >
                                        <img
                                            src={cat.img}
                                            alt={cat.title}
                                            className='w-8 h-8 object-cover rounded-md hover:scale-110 transition-transform duration-200'
                                        />
                                        {cat.title}
                                    </a>
                                ))}
                        </div>

                    </div>
                )}






                {pages && (
                    <div className='absolute bg-gray-100 top-[134px] left-[810px] flex gap-16 z-10 pl-4 pr-16 pb-6 pt-4 rounded-xl'>
                        <div className='flex flex-col gap-6'>
                            <a href="" onClick={() => navigate('/')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink /> Home Page</a>
                            <a href="" onClick={() => navigate('/shop')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink />Shop Page</a>
                            <a href="" onClick={() => navigate('/about')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink />About Us</a>
                            <a href="" className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink />Blog</a>
                            <a href="" onClick={() => navigate('/contact')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink />Contact</a>
                            <a href="" onClick={() => navigate('/team')} className='text-[#737373] text-[14px] font-[700] flex items-center gap-2'><FaLink />Our Team</a>
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

                            {user && user.name ? (
                                <>
                                    <button
                                        onClick={handleLogout}
                                        className='bg-red-500 text-white text-[28px] font-semibold py-2 px-4 rounded-2xl hover:text-red-500 hover:bg-white hover:border-2'
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href="" onClick={() => navigate('/login')}>
                                        <h3 className='bg-[#23A6F0] text-white text-[28px] font-semibold py-2 px-4 rounded-2xl hover:text-[#23A6F0] hover:bg-white hover:border-2'>Login</h3>
                                    </a>
                                    <p className='text-3xl text-[#23A6F0]'>/</p>
                                    <a href="" onClick={() => navigate('/signup')}>
                                        <h3 className='bg-[#23A6F0] text-white text-[28px] font-semibold py-2 px-4 rounded-2xl hover:text-[#23A6F0] hover:bg-white hover:border-2'>Register</h3>
                                    </a>
                                </>
                            )}


                        </div>

                    </div>
                )}


            </header>
        </>
    );
}