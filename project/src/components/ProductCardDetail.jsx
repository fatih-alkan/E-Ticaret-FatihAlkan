import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/shoppingCartSlice";

export default function ProductCardDetail({ product }) {
  if (!product) return null;

  const dispatch = useDispatch();
  const { title, description, price, discountPercentage, images } = product;

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
    <div className="flex justify-center gap-24 pt-16 max-[768px]:flex-col">
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
              className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                mainImage === img ? "border-blue-500" : "border-gray-200"
              }`}
              alt={`${title} - ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Ürün bilgisi */}
      <div className="flex flex-col max-w-80 bg-gray-300 p-8 gap-8 max-h-108 max-[768px]:mx-auto">
        <div className="flex-col gap-2 flex text-center">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600 text-center">{description}</p>
        <div className="flex gap-8 justify-center">
          <p className="text-l text-gray-800 text-center font-semibold">Stock: {product.stock}</p>
          <p className="text-l text-orange-400 text-center">⭐ {product.rating}</p>
        </div>

        <div className="flex justify-center text-center gap-2">
          {discountedPrice && (
            <span className="font-bold text-[#BDBDBD] line-through">
              ${price}
            </span>
          )}
          <span className="font-bold text-[#23856D]">
            ${discountedPrice || price}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-[#252B42] text-white py-2 px-6 rounded-xl cursor-pointer hover:bg-white hover:text-[#252B42] hover:border-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
