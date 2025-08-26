import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCardDetail from "../components/ProductCardDetail";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../store/reducers/productDetailSlice";
import ProductCard from "../components/ProductCard";
import Brands from "../components/Brands";

export default function ProductDetail() {
  const { productId } = useParams(); // URL’den productId yakala
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: product, loading, error } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Hata: {error}</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Ürün bulunamadı.</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4">
        

        <ProductCardDetail product={product} />
      </div>
      <ProductCard/>
      <Brands/>
      <Footer />
    </>
  );
}
