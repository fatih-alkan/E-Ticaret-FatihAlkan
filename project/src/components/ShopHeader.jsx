import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function ShopHeader() {
  const { list: categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="bg-[#FAFAFA] w-full">
      <div className="md:flex-row md:justify-between flex flex-col items-center mx-auto my-8 h-[92px] max-w-[1042px] align-middle">
        <h3 className="font-[700] text-[24px] text-[#252B42] my-auto">Shop</h3>
        <div className="flex items-center gap-2">
          <Link to="/" className="font-[700] text-[14px] text-[#252B42]">
            Home
          </Link>
          <FiChevronRight className="text-[#BDBDBD] text-lg" /> 
          <Link to="/shop" className="font-[700] text-[14px] text-[#BDBDBD]">
            Shop
          </Link>
        </div>
      </div>

      <div className="md:flex-row flex flex-col items-center justify-center gap-6 mt-8">
        {topCategories.map((cat) => (
          <div
            key={cat.id}
            className="w-62 cursor-pointer hover:scale-110 transform transition duration-200"
            onClick={() =>
              navigate(`/shop/${cat.gender}/${cat.title}/${cat.id}`)
            }
          >
            <div className="relative">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#252B42] bg-opacity-50 text-white text-center py-2 rounded-b-lg">
                {cat.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
