import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { fetchProducts } from "../store/reducers/productSlice";

export default function ProductList({ sort, filter }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { categoryId } = useParams(); 
  const productSectionRef = useRef(null);

  const { productList, total, fetchState, limit } = useSelector(
    (state) => state.product
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    dispatch(fetchProducts({ limit, offset, sort, filter, category: categoryId }));
  }, [dispatch, currentPage, limit, sort, filter, categoryId]);

  useEffect(() => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const totalPages = Math.ceil(total / limit);
  const visiblePages = 5;

  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= visiblePages) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      pages = [1];
      if (startPage > 2) pages.push("...");
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  if (fetchState === "FETCHING") {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#23A6F0] border-solid"></div>
      </div>
    );
  }

  if (fetchState === "FAILED") {
    return (
      <div className="text-center text-red-600 py-10">
        Ürünler yüklenirken hata oluştu!
      </div>
    );
  }

  return (
    <>
      {/* Ürünler */}
      <div
        ref={productSectionRef}
        className="flex flex-wrap justify-between max-w-[1224px] mx-auto"
      >
        {productList.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[48%] lg:w-[23%] bg-white mb-6"
          >
            <div className="h-[300px] flex items-center justify-center">
              <img
                onClick={() =>
                  navigate(`/productdetail/${product.id}`, {
                    state: { product },
                  })
                }
                src={product.thumbnail}
                className="w-4/5 h-full object-cover cursor-pointer rounded"
                alt={product.title}
              />
            </div>

            <div className="p-6">
              <div className="flex flex-col justify-between items-center gap-3">
                <div className="flex-col gap-2 flex text-center">
                  <h2 className="text-lg font-bold text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-600">{product.category}</p>
                </div>
                <div className="flex justify-center text-center gap-2">
                  <span className="font-bold text-[#BDBDBD] line-through">
                    ${product.price + 20}
                  </span>
                  <span className="font-bold text-[#23856D]">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center h-32">
        <nav className="inline-flex items-center text-sm">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded border ${
              currentPage === 1
                ? "bg-[#F3F3F3] text-[#BDBDBD]"
                : "hover:bg-gray-200"
            }`}
          >
            Prev
          </button>

          {getPageNumbers().map((page, i) =>
            page === "..." ? (
              <span key={`ellipsis-${i}`} className="px-4 py-2">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded ${
                  currentPage === page
                    ? "bg-[#23A6F0] text-white"
                    : "text-[#23A6F0] border-[#23A6F0] hover:bg-[#23856D]/10"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded border ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400"
                : "hover:bg-gray-200"
            }`}
          >
            Next
          </button>
        </nav>
      </div>
    </>
  );
}
