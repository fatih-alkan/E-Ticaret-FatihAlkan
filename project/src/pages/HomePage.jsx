import FeaturedProducts from "../components/FeaturedProducts";
import Neural from "../components/Neural";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";
import Summer from "../components/Summer";
import Header from "../layout/Header";
import Footer from "../layout/Footer"
export default function HomePage() {
    return(
        <>
        <Header/>
        <ShopCard/>
        <ProductCard/>
        <Summer/>
        <Neural/>
        <FeaturedProducts/>
        <Footer/>
        </>
    );
}