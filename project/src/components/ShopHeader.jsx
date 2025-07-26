import { Link } from "react-router-dom";
import arrow from "../images/shopPage-img/arrow.png"
import shopHeaderCard from "../images/shopPage-img/ShopHeaderCard.png"
import shopHeaderCard1 from "../images/shopPage-img/ShopHeaderCard1.png"
import shopHeaderCard2 from "../images/shopPage-img/ShopHeaderCard2.png"
import shopHeaderCard3 from "../images/shopPage-img/ShopHeaderCard3.png"
import shopHeaderCard4 from "../images/shopPage-img/ShopHeaderCard4.png"


export default function ShopHeader() {
    return (
        <>
            <div className="bg-[#FAFAFA] h-[1780px] w-full md:h-[420px]">
                <div className="md:flex-row md:justify-between flex flex-col items-center mx-auto my-8 h-[92px] max-w-[1042px] align-middle">
                    <h3 className="font-[700] text-[24px] text-[#252B42] my-auto">Shop</h3>
                    <div className="flex items-center gap-4">
                        <Link to="/" className="font-[700] text-[14px] text-[#252B42]">Home</Link>
                        <Link to=""><img src={arrow} alt="" /></Link>
                        <Link to="/shop" className="font-[700] text-[14px] text-[#BDBDBD]">Shop</Link>
                    </div>
                </div>
                <div className="md:flex-row flex flex-col items-center justify-center gap-4">

                    <a href=""><img src={shopHeaderCard} alt="" className="w-72 hover:opacity-70" /></a>
                    <a href=""><img src={shopHeaderCard1} alt="" className="w-72 hover:opacity-70" /></a>
                    <a href=""><img src={shopHeaderCard2} alt="" className="w-72 hover:opacity-70" /></a>
                    <a href=""><img src={shopHeaderCard3} alt="" className="w-72 hover:opacity-70" /></a>
                    <a href=""><img src={shopHeaderCard4} alt="" className="w-72 hover:opacity-70" /></a>
                </div>
            </div>
            <div>

            </div>

        </>
    )
}