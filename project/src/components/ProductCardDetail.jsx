import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/shoppingCartSlice";
import { FaStar, FaRegStar, FaStarHalfAlt, FaHeart, FaRegHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
export default function ProductCardDetail({ product }) {
  if (!product) return null;

  const dispatch = useDispatch();
  const { title, description, price, discountPercentage, images } = product;
  const [liked, setLiked] = useState(false);
  const [mainImage, setMainImage] = useState(
    images && images.length > 0 ? images[0] : ""
  );

  const discountedPrice = discountPercentage
    ? (price - price * (discountPercentage / 100)).toFixed(2)
    : null;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col justify-center mt-16 pt-16 max-[768px]:flex-col bg-gray-100 max-[768px]:gap-8">
      <div className="flex items-center gap-2 pl-16 max-[768px]:p-0 max-[768px]:justify-center">
        <Link to="/" className="font-[700] text-[14px] text-[#252B42]">
          Home
        </Link>
        <FiChevronRight className="text-[#BDBDBD] text-lg" />
        <Link to="/shop" className="font-[700] text-[14px] text-[#BDBDBD]">
          Shop
        </Link>
      </div>
      <div className="flex pl-16 py-12 max-[768px]:flex-col gap-8 max-[768px]:p-0 max-[768px]:pb-16">


        {/* Görseller */}

        <div className="bg-white shadow-md">
          <div className="h-[417px] flex items-center justify-center">
            <img
              src={mainImage}
              className="w-full h-full object-cover max-[768px]:w-[60%]"
              alt={title}
            />
          </div>
          <div className="flex justify-center gap-2 py-4 flex-wrap">
            {images?.slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${mainImage === img ? "border-blue-500" : "border-gray-200"
                  }`}
                alt={`${title} - ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Ürün bilgisi */}
        <div className="flex flex-col max-w-120 p-8 gap-8 max-h-108 max-[768px]:mx-auto">
          <div className="flex-col gap-2 flex">
            <h2 className="text-xl text-gray-800 font-montserrat">{title}</h2>
            <p className="flex text-[#F3CD03]">
              {[...Array(5)].map((_, i) => {
                const full = i + 1 <= Math.floor(product.rating);
                const half = i + 0.5 === Math.floor(product.rating) + 0.5 && product.rating % 1 !== 0;

                return full ? (
                  <FaStar key={i} />
                ) : half ? (
                  <FaStarHalfAlt key={i} />
                ) : (
                  <FaRegStar key={i} />
                );
              })}
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              {discountedPrice && (
                <span className="font-bold text-[#BDBDBD] line-through">
                  ${price}
                </span>
              )}
              <span className="font-bold text-[#23856D]">
                ${discountedPrice || price}
              </span>
            </div>
            <div className="flex gap-8">
              <p className="text-l text-gray-800 font-semibold">Stock: {product.stock}</p>
            </div>
          </div>


          <p className="text-[#858585]">{description}</p>
          <hr />

          <div className="flex gap-2">
            <button className="w-6 h-6 bg-[#23A6F0] rounded-4xl"></button>
            <button className="w-6 h-6 bg-[#2DC071] rounded-4xl"></button>
            <button className="w-6 h-6 bg-[#E77C40] rounded-4xl"></button>
            <button className="w-6 h-6 bg-[#252B42] rounded-4xl"></button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#23A6F0] text-white py-2 px-6 rounded cursor-pointer hover:bg-white hover:text-[#252B42] hover:border-2"
            >
              Add to Cart
            </button>
            <button className="w-8 h-8 bg-white border border-black rounded-4xl text-xl flex items-center justify-center " onClick={() => setLiked(!liked)}>
              {liked ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button onClick={handleAddToCart} className="w-8 h-8 bg-white border border-black rounded-4xl text-xl flex items-center justify-center"> <FaShoppingCart/> </button>
            <button className="w-8 h-8 bg-white border border-black rounded-4xl text-xl flex items-center justify-center"> <FaEye/></button>
          </div>

        </div>
      </div>
    </div>
  );
}
