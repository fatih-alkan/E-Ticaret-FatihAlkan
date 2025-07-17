import men from '../images/shopping-img/men.jpg'
import women from '../images/shopping-img/women.jpg'
import kids from '../images/shopping-img/kids.jpg'
import accessories from '../images/shopping-img/accessories.jpg'
export default function ShopCard() {
    return(
        <>
        <div>
            <div className="flex flex-col items-center justify-center gap-2 mt-24">
                <h3 className="font-bold text-2xl text-[#252B42]">EDITOR'S PICK</h3>
                <p className="text-[#737373] max-w-48 text-center mb-6">Problem trying to resolve the conflict between</p>
            </div>
            <div className="relative w-[312px] h-[486px] m-auto mt-6">
            <img src={men} alt="Men Fashion" className="w-full h-full object-cover"/>
            <a href='' className="absolute bottom-6 left-1/3 transform -translate-x-1/2 bg-white px-16 py-3 text-sm font-bold text-black ">
                MEN
            </a>
            </div>
            <div className="relative w-[312px] h-[486px] m-auto mt-6">
            <img src={women} alt="Women Fashion" className="w-full h-full object-cover"/>
            <a href='' className="absolute bottom-6 left-2/5 transform -translate-x-1/2 bg-white px-8 py-3 text-sm font-bold text-black ">
                WOMEN
            </a>
            </div>
            <div className="relative w-[312px] h-[486px] m-auto mt-6">
            <img src={accessories} alt="Accessories Fashion" className="w-full h-full object-cover"/>
            <a href='' className="absolute bottom-6 left-1/3 transform -translate-x-1/2 bg-white px-8 py-3 text-sm font-bold text-black ">
                ACCESSORIES
            </a>
            </div>
            <div className="relative w-[312px] h-[486px] m-auto mt-6">
            <img src={kids} alt="Kids Fashion" className="w-full h-full object-cover"/>
            <a href='' className="absolute bottom-6 left-1/4 transform -translate-x-1/2 bg-white px-8 py-3 text-sm font-bold text-black ">
                KIDS
            </a>
            </div>
        </div>
        </>
    );
}