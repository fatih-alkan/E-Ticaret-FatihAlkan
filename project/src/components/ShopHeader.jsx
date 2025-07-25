import { Link } from "react-router-dom";
import arrow from "../images/shopPage-img/arrow.png"
import shopHeaderCard from "../images/shopPage-img/shopHeaderCard.png"
import shopHeaderCard1 from "../images/shopPage-img/shopHeaderCard1.png"
import shopHeaderCard2 from "../images/shopPage-img/shopHeaderCard2.png"
import shopHeaderCard3 from "../images/shopPage-img/shopHeaderCard3.png"
import shopHeaderCard4 from "../images/shopPage-img/shopHeaderCard4.png"


export default function ShopHeader() {
    return (
        <>
            <div className="bg-[#FAFAFA] h-[363px]">
                <div className="flex flex-col items-center mx-auto my-8 h-[92px] max-w-[1042px] align-middle">
                    <h3 className="font-[700] text-[24px] text-[#252B42] my-auto">Shop</h3>
                    <div className="flex items-center gap-4">
                        <Link to="/" className="font-[700] text-[14px] text-[#252B42]">Home</Link>
                        <Link to=""><img src={arrow} alt="" /></Link>
                        <Link to="/shop" className="font-[700] text-[14px] text-[#BDBDBD]">Shop</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">

                    <a href=""><img src={shopHeaderCard} alt="" /></a>
                    <a href=""><img src={shopHeaderCard1} alt="" /></a>
                    <a href=""><img src={shopHeaderCard2} alt="" /></a>
                    <a href=""><img src={shopHeaderCard3} alt="" /></a>
                    <a href=""><img src={shopHeaderCard4} alt="" /></a>
                </div>
            </div>
            <div>

            </div>

        </>
    )
}