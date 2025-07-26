import { useState, useEffect } from 'react';

import product1 from '../images/product-img/product1.jpg'
import product2 from '../images/product-img/product2.jpg'
import product3 from '../images/product-img/product3.jpg'
import product4 from '../images/product-img/product4.jpg'
import product5 from '../images/product-img/product5.jpg'
import product6 from '../images/product-img/product6.jpg'
import product7 from '../images/product-img/product7.jpg'
import product8 from '../images/product-img/product8.jpg'
import product9 from '../images/product-img/product9.jpg'
import product10 from '../images/product-img/product10.jpg'
import product11 from '../images/product-img/product11.jpg'
import product12 from '../images/product-img/product12.jpg'

import mavi from '../images/product-img/mavi.png'
import yesil from '../images/product-img/yesil.png'
import turuncu from '../images/product-img/turuncu.png'
import koyu from '../images/product-img/koyu.png'

const products = [
  product1, product2, product3, product4,
  product5, product6, product7, product8,
  product9, product10, product11, product12
];

export default function ProductList() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Mobil kontrolü
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'sm' breakpoint
    };

    handleResize(); // ilk yüklemede çalışsın
    window.addEventListener('resize', handleResize); // ekran değiştiğinde kontrol et
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Gösterilecek ürünleri belirle
  const productsPerPage = isMobile ? 4 : products.length; // mobilde 4, diğerde hepsi
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <>
      <div className="flex flex-wrap justify-between max-w-[1124px] mx-auto">
        {currentProducts.map((productImage, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[23%] bg-white mb-6"
          >
            <div className="h-[427px] flex items-center justify-center">
              <img
                src={productImage}
                className="w-4/5 h-full object-cover"
                alt={`Product ${index + 1}`}
              />
            </div>

            <div className="p-6">
              <div className="flex flex-col justify-between items-center gap-3">
                <div className="flex-col gap-2 flex text-center">
                  <h2 className="text-xl font-bold text-gray-800">Graphic Design</h2>
                  <p className="text-gray-600">English Department</p>
                </div>
                <div className="flex justify-center text-center gap-2">
                  <span className="font-bold text-[#BDBDBD]">$16.48</span>
                  <span className="font-bold text-[#23856D]">$6.48</span>
                </div>
                <div className="flex gap-1 h-8">
                  <a href=""><img src={mavi} alt="mavi" /></a>
                  <a href=""><img src={yesil} alt="yesil" /></a>
                  <a href=""><img src={turuncu} alt="turuncu" /></a>
                  <a href=""><img src={koyu} alt="koyu" /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination sadece mobilde */}
      
        <div className="flex justify-center h-32">
          <nav className="inline-flex items-center text-sm">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded border ${
                currentPage === 1 ? "bg-[#F3F3F3] text-[#BDBDBD]" : "hover:bg-gray-200"
              }`}
            >
              Prev
            </button>

            {[...Array(totalPages).keys()].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === i + 1
                    ? "bg-[#23A6F0] text-white"
                    : "text-[#23A6F0] border-[#23A6F0] hover:bg-[#23856D]/10"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded border ${
                currentPage === totalPages ? "bg-gray-100 text-gray-400" : "hover:bg-gray-200"
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      
    </>
  );
}
