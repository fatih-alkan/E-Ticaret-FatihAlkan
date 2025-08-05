import { useState } from 'react';
import mavi from '../images/product-img/mavi.png';
import yesil from '../images/product-img/yesil.png';
import turuncu from '../images/product-img/turuncu.png';
import koyu from '../images/product-img/koyu.png';

import product1 from '../images/product-img/product1.jpg';
import product2 from '../images/product-img/product2.jpg';
import product3 from '../images/product-img/product3.jpg';
import product4 from '../images/product-img/product4.jpg';
import product5 from '../images/product-img/product5.jpg';
import product6 from '../images/product-img/product6.jpg';
import product7 from '../images/product-img/product7.jpg';
import product8 from '../images/product-img/product8.jpg';

const allImages = [
  product1, product2, product3, product4,
  product5, product6, product7, product8
];

export default function ProductCardDetail({ image }) {
  const [mainImage, setMainImage] = useState(image);

  return (
    <div className='flex justify-center gap-24 pt-16 max-[768px]:flex-col'>
      {/* Sol taraf: Görseller */}
      <div className="bg-white shadow-md">
        <div className="h-[417px] flex items-center justify-center">
          <img
            src={mainImage}
            className="w-full h-full object-cover max-[768px]:w-[60%]"
            alt="Ürün"
          />
        </div>

        {/* Küçük görseller */}
        <div className="flex justify-center gap-2 py-4">
          {allImages.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${mainImage === img ? 'border-blue-500' : 'border-gray-200'}`}
              alt={`Alt ürün ${index + 1}`}
            />
          ))}
        </div>

        {/* Renk seçenekleri */}
        <div className="pt-2">
          <div className="flex flex-col justify-between items-center gap-3">
            <div className="flex gap-1 h-8">
              <a href="#"><img src={mavi} alt="mavi" /></a>
              <a href="#"><img src={yesil} alt="yesil" /></a>
              <a href="#"><img src={turuncu} alt="turuncu" /></a>
              <a href="#"><img src={koyu} alt="koyu" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Sağ taraf: Ürün bilgisi */}
      <div className='flex flex-col max-w-80 bg-gray-300 p-8 gap-8 max-h-108 max-[768px]:mx-auto'>
        <div className="flex-col gap-2 flex text-center">
          <h2 className="text-xl font-bold text-gray-800">Graphic Design</h2>
          <p className="text-gray-700">English Department</p>
        </div>
        <p className='text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione repudiandae asperiores quam perspiciatis excepturi impedit non sint quisquam cumque.
        </p>
        <div className="flex justify-center text-center gap-2">
          <span className="font-bold text-[#BDBDBD]">$16.48</span>
          <span className="font-bold text-[#23856D]">$6.48</span>
        </div>
        <button className='bg-[#252B42] text-white py-2 px-6 rounded-xl cursor-pointer hover:bg-white hover:text-[#252B42] hover:border-2'>Add to Cart</button>
      </div>
    </div>
  );
}
