import ShopHeader from "../components/ShopHeader";
import Header from "../layout/Header";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import Brands from "../components/Brands";
import Footer from "../layout/Footer";
export default function ShopPage(){
    return (
        <>
        <Header/>
        <ShopHeader/>
        <Filter/>
        <ProductList/>
        <Brands/>
        <Footer/>
        </>
    )
}