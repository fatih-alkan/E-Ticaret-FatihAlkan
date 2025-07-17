import profile from '../images/header-img/profile.png'
import search from '../images/header-img/search.png'
import shoppingCard from '../images/header-img/shopping-card.png'
import menu from '../images/header-img/menu.png'
import contact from '../images/header-img/contact.png'
import home from '../images/header-img/home.png'
import pricing from '../images/header-img/pricing.png'
import product from '../images/header-img/product.png'
import homeBanner from '../images/header-img/home-banner.jpg'
export default function Header() {
    return(
        <>
        <header className='flex gap-32 flex-col h-[1285px] w-full' >
            <div className='flex justify-around pt-4'>
            <h3 className='font-bold text-2xl text-[#252B42]'>Bandage</h3>
            <div className='flex items-center gap-6'>
                <a href=""><img src={profile} alt="" /></a>
                <a href=""><img src={search} alt="" /></a>
                <a href=""><img src={shoppingCard} alt="" /></a>
                <a href=""><img src={menu} alt="" /></a>
            </div>
            </div>
            <div className='flex flex-col gap-12 justify-center items-center'>
                <a href=""><img src={home} alt="" /></a>
                <a href=""><img src={product} alt="" /></a>
                <a href=""><img src={pricing} alt="" /></a>
                <a href=""><img src={contact} alt="" /></a>
            </div>
            <div className="relative w-full h-[770px] bg-cover bg-center text-white  flex flex-col justify-center items-center text-center gap-4" style={{ backgroundImage: `url(${homeBanner})` }}>
            <p className=" font-bold uppercase tracking-wide">Summer 2020</p>
            <div>
            <h2 className="text-4xl font-bold mt-2">NEW</h2>
            <h2 className="text-4xl font-bold">COLLECTION</h2>
            </div>
            
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-7xl cursor-pointer">
                &lt;
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-7xl cursor-pointer">
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