import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCardDetail from "../components/ProductCardDetail";
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const location = useLocation();
  const { productImage } = location.state || {};

  if (!productImage) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <>
    <Header/>
      <ProductCardDetail image={productImage} />
    <Footer/>
    </>
    
  );
}
