import btnGallery from "../images/shopPage-img/btn-gallery.png"
import btnList from "../images/shopPage-img/btn-list.png"
import arrowBottom from "../images/shopPage-img/arrow-bottom.png"

export default function Filter(){
    return (
        <>
        <div className="md:flex-row md:justify-around flex flex-col items-center gap-8 h-[216px] justify-center">
            <h6 className="text-[#737373] font-bold">Showing all 12 results</h6>
            <div className="flex items-center gap-8">
                <h6 className="text-[#737373] font-bold">Views: </h6>
                <button className="cursor-pointer hover:opacity-70"><img src={btnGallery} alt="" /></button>
                <button className="cursor-pointer hover:opacity-70"><img src={btnList} alt="" /></button>
            </div>
            <div className="flex gap-2">
                <button className="bg-[#DDDDDD] py-3 px-6 rounded-[5px] flex items-center gap-2 text-[#737373] hover:opacity-70">Popularity <img src={arrowBottom} alt="" /></button>
                <button className="py-3 px-6 bg-[#23A6F0] text-white rounded-[5px] hover:opacity-70">Filter</button>
            </div>
        </div>
        </>
    )
}