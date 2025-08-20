import btnGallery from "../images/shopPage-img/btn-gallery.png";
import btnList from "../images/shopPage-img/btn-list.png";
import arrowBottom from "../images/shopPage-img/arrow-bottom.png";

export default function Filter({ total, sort, setSort, filter, setFilter, setCurrentPage }) {
  return (
    <div className="md:flex-row md:justify-around flex flex-col items-center gap-8 h-[216px] justify-center">
      <h6 className="text-[#737373] font-bold">Showing all {total} results</h6>

      <div className="flex items-center gap-8">
        <h6 className="text-[#737373] font-bold">Views: </h6>
        <button className="cursor-pointer hover:opacity-70">
          <img src={btnGallery} alt="Gallery view" />
        </button>
        <button className="cursor-pointer hover:opacity-70">
          <img src={btnList} alt="List view" />
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <select value={sort} onChange={e => setSort(e.target.value)} className="bg-[#DDDDDD] py-3 px-2 rounded-[5px] text-[#737373]">
          <option value="">Sort by</option>
          <option value="price:asc">Price ↑</option>
          <option value="price:desc">Price ↓</option>
          <option value="rating:asc">Rating ↑</option>
          <option value="rating:desc">Rating ↓</option>
        </select>

        <input type="text" placeholder="Filter..." value={filter} onChange={e => setFilter(e.target.value)}
          className="border px-1 py-2 rounded-md w-32"
        />

        <button onClick={() => setCurrentPage(1)} className="py-3 px-3 bg-[#23A6F0] text-white rounded-[5px] hover:opacity-70 flex items-center gap-2">
          Filter <img src={arrowBottom} alt="Apply filter" />
        </button>
      </div>
    </div>
  );
}
