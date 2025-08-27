import { useState } from 'react'
import profile from '../images/header-img/profile.png'
import search from '../images/header-img/search.png'
import menu from '../images/header-img/menu.png'
import phone from '../images/header-img/phone.png'
import message from '../images/header-img/message.png'
import insta from '../images/header-img/insta.png'
import face from '../images/header-img/face.png'
import youtube from '../images/header-img/youtube.png'
import twitter from '../images/header-img/twitter.png'
import { useNavigate, Link } from 'react-router-dom';
import { FaChevronDown, FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FiMoreHorizontal } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/reducers/clientSlice";
import { useLocation } from "react-router-dom";
import md5 from 'blueimp-md5';
import { fetchCategories } from "../store/reducers/categorySlice";
import { useEffect } from "react";
import CartDropdown from '../components/CartDropdown'
import CartLikeDropdown from '../components/CartLikeDropDown'

export default function Header() {
    const location = useLocation();
    const { user } = useSelector((state) => state.client);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [shop, setShop] = useState(false);
    const dispatch = useDispatch();
    const { list: categories } = useSelector((state) => state.categories);
    const cart = useSelector((state) => state.shoppingCart.cart);
    const totalCount = cart.reduce((sum, item) => sum + item.count, 0);
    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }
    }, [categories, dispatch]);
    useEffect(() => {
        console.log("Categories from Redux:", categories);
    }, [categories]);
    const [showCart, setShowCart] = useState(false);
    const [showLikes, setShowLikes] = useState(false);
    const { likedItems } = useSelector((state) => state.liked);
    const handleToggle = (e) => {
        e.preventDefault();
        setVisible((prev) => !prev);
    };
    const shopToggle = (e) => {
        e.preventDefault();
        setShop((prev) => !prev);
        setPages(false);
    }
    const userToggle = (e) => {
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
                    <div className='flex items-center gap-4'>
                        <a href=""><img src={avatarUrl} alt="" className='w-6' /></a>
                        {user && user.name ? (
                            <div className="relative">
                                <span
                                    className='flex items-center gap-2 font-[700] text-[21px] text-gray-600 cursor-pointer'
                                    onClick={() => setShowUserMenu((prev) => !prev)}
                                >
                                    {user.name} <FaChevronDown />
                                </span>

                                {/* Dropdown Menü (mobil) */}
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                                        <button
                                            onClick={() => {
                                                navigate("/profile", { state: { tab: "overview" } });
                                                setShowUserMenu(false);
                                            }}
                                            className="cursor-pointer w-full text-left px-4 py-2 text-[#23A6F0] hover:bg-gray-100"
                                        >
                                            Profile
                                        </button>
                                        <button
                                            onClick={() => {
                                                navigate("/profile", { state: { tab: "orders" } });
                                                setShowUserMenu(false);
                                            }}
                                            className="cursor-pointer w-full text-left px-4 py-2 text-[#23A6F0] hover:bg-gray-100"
                                        >
                                            Orders
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className='w-full text-left px-4 py-2 text-[14px] text-red-500 cursor-pointer'
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <></>
                        )}

                        <button
                                className="flex items-center text-gray-600 hover:opacity-80 relative cursor-pointer"
                                
                            >
                                <FaSearch size={20} />
                                
                            </button>

                        <div className="relative">
                            <button
                                className="flex items-center text-gray-600 hover:opacity-80 relative cursor-pointer"
                                onClick={() => setShowCart(prev => !prev)}
                            >
                                <FaShoppingCart size={20} />
                                {totalCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {cart.length}
                                    </span>
                                )}
                            </button>

                            {/* Mini sepet */}
                            {showCart && (
                                <div className='absolute right-[-40px] mt-2 w-88 bg-white shadow-lg border rounded-lg z-50 p-4'>
                                    <CartDropdown />
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="flex items-center text-gray-600 hover:opacity-80 relative cursor-pointer"
                                onClick={() => setShowLikes(prev => !prev)}
                            >
                                <FaHeart size={20} />
                                {likedItems.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {likedItems.length}
                                    </span>
                                )}
                            </button>

                            {showLikes && (
                                <div className="absolute right-[-40px] mt-2 w-88 bg-white shadow-lg border rounded-lg z-50 p-4">
                                    <CartLikeDropdown />
                                </div>
                            )}
                        </div>
                        <button
                                className="flex items-center text-gray-600 hover:opacity-80 relative cursor-pointer"
                                onClick={handleToggle}
                            >
                                <FiMoreHorizontal size={20} />
                                
                            </button>
                    </div>
                </div>
                {/*web */}
                <div className='hidden md:flex justify-around w-full mx-auto gap-16 shadow-md py-2'>
                    <div className='flex gap-32 px-8 items-center'>
                        <h3 onClick={() => navigate('/')} className='font-bold text-2xl text-[#252B42] cursor-pointer'>Bandage</h3>

                    </div>
                    <div className='flex items-center gap-6'>
                        <a
                            href=""
                            className={`text-gray-500 text-[14px] hover:border-b-2 ${location.pathname === "/" ? "font-normal" : "font-bold"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                            }}
                        >
                            Home
                        </a>

                        <div
                            className={`flex items-center gap-2 hover:border-b-2 text-[14px] ${location.pathname.startsWith("/shop") ? "text-gray-500 font-normal" : "text-gray-500 font-bold"
                                }`}
                        >
                            <a
                                href=""
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/shop");
                                }}
                            >
                                Shop
                            </a>
                            <a href="" onClick={shopToggle}>
                                <FaChevronDown />
                            </a>
                        </div>

                        <a
                            href=""
                            className={`text-gray-500 text-[14px] hover:border-b-2 ${location.pathname === "/about" ? "font-normal" : "font-bold"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/about");
                            }}
                        >
                            About
                        </a>

                        <a
                            href=""
                            className={`text-gray-500 text-[14px] hover:border-b-2 ${location.pathname === "/blog" ? "font-normal" : "font-bold"
                                }`}
                            onClick={(e) => e.preventDefault()}
                        >
                            Blog
                        </a>

                        <a
                            href=""
                            className={`text-gray-500 text-[14px] hover:border-b-2 ${location.pathname === "/contact" ? "font-normal" : "font-bold"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/contact");
                            }}
                        >
                            Contact
                        </a>

                        <a
                            href=""
                            className={`text-gray-500 text-[14px] hover:border-b-2 ${location.pathname === "/team" ? "font-normal" : "font-bold"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/team");
                            }}
                        >
                            Team
                        </a>

                    </div>
                    <div className='flex gap-8 items-center'>
                        <div className='flex gap-4 items-center'>
                            <img src={avatarUrl} alt="" className='w-4' />

                            {user && user.name ? (
                                <>
                                    <div className="relative">
                                        <span
                                            className="flex items-center gap-2 font-[700] text-[18px] text-[#23A6F0] cursor-pointer"
                                            onClick={() => setShowUserMenu((prev) => !prev)}
                                        >
                                            {user.name} <FaChevronDown />
                                        </span>

                                        {/* Dropdown Menü */}
                                        {showUserMenu && (
                                            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                                                <button
                                                    onClick={() => {
                                                        navigate("/profile", { state: { tab: "overview" } });
                                                        setShowUserMenu(false);
                                                    }}
                                                    className="cursor-pointer w-full text-left px-4 py-2 text-[#23A6F0] hover:bg-gray-100"
                                                >
                                                    Profile
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        navigate("/profile", { state: { tab: "orders" } });
                                                        setShowUserMenu(false);
                                                    }}
                                                    className="cursor-pointer w-full text-left px-4 py-2 text-[#23A6F0] hover:bg-gray-100"
                                                >
                                                    Orders
                                                </button>
                                                <button
                                                    onClick={handleLogout}
                                                    className='w-full text-left px-4 py-2 text-[14px] text-red-500 cursor-pointer'
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>

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
                            <a href="" className='text-[#23A6F0] hover:opacity-80'><FaSearch size={25}/></a>
                            <div className="relative">
                                <button
                                    className="flex items-center text-[#23A6F0] hover:opacity-80 relative cursor-pointer"
                                    onClick={() => setShowCart(prev => !prev)}
                                >
                                    <FaShoppingCart size={25} />
                                    {totalCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                            {cart.length}
                                        </span>
                                    )}
                                </button>

                                {/* Mini sepet */}
                                {showCart && (

                                    <div className='absolute right-0 mt-2 w-80 bg-white shadow-lg border rounded-lg z-50 p-4'>
                                        <CartDropdown />
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                <button
                                    className="flex items-center text-[#23A6F0] hover:opacity-80 relative cursor-pointer"
                                    onClick={() => setShowLikes(prev => !prev)}
                                >
                                    <FaHeart size={25}/>
                                    {likedItems.length > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                            {likedItems.length}
                                        </span>
                                    )}
                                </button>

                                {/* Mini Like dropdown */}
                                {showLikes && (
                                    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg border rounded-lg z-50 p-4">
                                        <CartLikeDropdown />
                                    </div>
                                )}
                            </div>
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


            </header >
        </>
    );
}