import brand1 from "../images/brands-img/brand1.png"
import brand2 from "../images/brands-img/brand2.png"
import brand3 from "../images/brands-img/brand3.png"
import brand4 from "../images/brands-img/brand4.png"
import brand5 from "../images/brands-img/brand5.png"
import brand6 from "../images/brands-img/brand6.png"

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
export default function Brands() {
    return (
        <>
            <div className="md:flex-row md:h-[200px] flex flex-col gap-16 justify-center items-center h-[1052px] bg-[#FAFAFA]">
            {brands.map((brand , index) => (
                <img src={brand} key={index} alt="" />
            ))}
            </div>
        </>
    )
}