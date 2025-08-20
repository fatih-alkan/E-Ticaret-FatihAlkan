import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../store/reducers/productSlice"; // senin thunk

export default function ProductCard({ sort, filter, categoryId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productList, fetchState } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 8, offset: 0, sort, filter, category: categoryId }));
  }, [dispatch, sort, filter, categoryId]);

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="px-4 mt-16 mb-16">
      {/* Başlık */}
      <div className="flex flex-col items-center justify-center gap-2 mb-6">
        <h3 className="text-[#737373] text-xl">Featured Products</h3>
        <div>
          <h3 className="font-bold text-2xl text-[#252B42]">BESTSELLER</h3>
          <h3 className="font-bold text-2xl text-[#252B42]">PRODUCTS</h3>
        </div>
        <p className="text-[#737373] max-w-48 text-center">
          Problem trying to resolve the conflict between
        </p>
      </div>

      {/* Ürün Kartları */}
      <div className="flex flex-wrap justify-center gap-20 max-w-[1224px] m-auto">
        {productList?.map((product) => {
          const productNameSlug = (product.title || product.name)
            .replace(/\s+/g, "-")
            .toLowerCase();

          return (
            <div
              key={product.id}
              className="w-full sm:w-[48%] lg:w-[23%] bg-white cursor-pointer transform transition hover:scale-105 hover:shadow-lg rounded-lg"
              onClick={() =>
                navigate(
                  `/shop/${product.gender || "unisex"}/${
                    product.category || "genel"
                  }/${product.categoryId || categoryId}/${productNameSlug}/${product.id}`
                )
              }
            >
              <div className="h-[427px] flex items-center justify-center">
                <img
                  src={product.thumbnail || product.images?.[0]?.url}
                  className="w-full h-full object-cover rounded"
                  alt={product.title || product.name}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-col justify-between items-center gap-3">
                  <div className="flex-col gap-2 flex text-center">
                    <h2 className="text-xl font-bold text-gray-800">
                      {product.title || product.name}
                    </h2>
                    <p className="text-gray-600">{product.category}</p>
                  </div>
                  <div className="flex justify-center text-center gap-2">
                    <span className="font-bold text-[#BDBDBD] line-through">
                      ${(product.price + 20).toFixed(2)}
                    </span>
                    <span className="font-bold text-[#23856D]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  {product.colors && (
                    <div className="flex gap-1 h-8">
                      {product.colors.map((color, idx) => (
                        <img key={idx} src={color} alt={`color-${idx}`} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
