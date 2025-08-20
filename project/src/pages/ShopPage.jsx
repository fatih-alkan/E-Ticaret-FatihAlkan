import ShopHeader from "../components/ShopHeader";
import Header from "../layout/Header";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import Brands from "../components/Brands";
import Footer from "../layout/Footer";
import { useState } from "react";

export default function ShopPage() {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <>
      <Header />
      <ShopHeader />
      <Filter 
        sort={sort} 
        setSort={setSort} 
        filter={filter} 
        setFilter={setFilter} 
      />
      <ProductList sort={sort} filter={filter} />
      <Brands />
      <Footer />
    </>
  );
}
