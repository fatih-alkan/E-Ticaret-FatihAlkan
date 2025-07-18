import product1 from '../images/product-img/product1.jpg'
import product2 from '../images/product-img/product2.jpg'
import product3 from '../images/product-img/product3.jpg'
import product4 from '../images/product-img/product4.jpg'
import product5 from '../images/product-img/product5.jpg'
import product6 from '../images/product-img/product6.jpg'
import product7 from '../images/product-img/product7.jpg'
import product8 from '../images/product-img/product8.jpg'
import mavi from '../images/product-img/mavi.png'
import yesil from '../images/product-img/yesil.png'
import turuncu from '../images/product-img/turuncu.png'
import koyu from '../images/product-img/koyu.png'

const products = [product1, product2, product3, product4, product5, product6, product7, product8];

export default function ProductCard() {
  return (
    <div className="px-4 mt-24">
      {/* Başlık */}
      <div className="flex flex-col items-center justify-center gap-2 mb-6">
        <h3 className="text-[#737373] text-xl">Featured Products</h3>
        <div>
          <h3 className="font-bold text-2xl text-[#252B42]">BESTSELLER</h3>
          <h3 className="font-bold text-2xl text-[#252B42]">PRODUCTS</h3>
        </div>
        <p className="text-[#737373] max-w-48 text-center">Problem trying to resolve the conflict between</p>
      </div>

      {/* Ürün Kartları */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1124px] m-auto">
        {products.map((productImage, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[23%] bg-white"
          >
            <div className="h-[427px] flex items-center justify-center">
              <img
                src={productImage}
                className="w-full h-full object-cover"
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
    </div>
  );
}
