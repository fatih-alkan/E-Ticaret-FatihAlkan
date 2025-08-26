import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCount, toggleChecked } from "../store/reducers/shoppingCartSlice";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

export default function ProductDetail() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  if (!cart.length) return <div className=" text-center"><Header/><span className="font-bold text-gray-800 text-2xl">Sepetiniz Boş</span> <Footer/></div>;

  const totalPrice = cart
    .filter(item => item.checked)
    .reduce((acc, item) => acc + item.product.price * item.count, 0);

  const shippingCost = totalPrice > 150 ? 0 : 15;  
  const discount = totalPrice > 200 ? 20 : 0;      
  const finalTotal = totalPrice + shippingCost - discount;

  return (
    <>
      <Header />
      <div className="max-w-[1180px] m-auto py-8 flex flex-col md:flex-row gap-6 justify-between mt-16">

        {/* Cart Section */}
        <div className="bg-white shadow-md p-4 flex-1">
          <h3 className="text-[#252B42] font-bold text-2xl mb-4">
            My Cart <span className="text-gray-500 font-semibold text-xl">({cart.length} item)</span>
          </h3>

          {/* Grid Header */}
          <div className="grid grid-cols-12 gap-2 text-gray-500 font-semibold text-sm mb-2">
            <div className="col-span-5">PRODUCT</div>
            <div className="col-span-3 text-center">QUANTITY</div>
            <div className="col-span-2 text-center">PRICE</div>
            <div className="col-span-2 text-center">ACTION</div>
          </div>
          <hr className="text-gray-500 mb-2" />

          {/* Cart Items */}
          {cart.map((item) => (
            <div key={item.product.id} className="grid grid-cols-12 gap-2 items-center mb-3 text-sm border p-2 border-gray-400 rounded-xl">
              {/* Product */}
              <div className="col-span-5 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => dispatch(toggleChecked(item.product.id))}
                />
                <img
                  src={item.product.thumbnail || item.product.images?.[0]}
                  alt={item.product.title}
                  className="w-10 h-12 object-cover rounded"
                />
                <p className="font-semibold">{item.product.title}</p>
              </div>

              {/* Quantity */}
              <div className="col-span-3 flex justify-center items-center gap-2">
                <button
                  className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center p-1 hover:bg-gray-300 cursor-pointer"
                  onClick={() =>
                    dispatch(updateCount({ productId: item.product.id, count: item.count - 1 }))
                  }
                  disabled={item.count === 1}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center p-1 hover:bg-gray-300 cursor-pointer"
                  onClick={() =>
                    dispatch(updateCount({ productId: item.product.id, count: item.count + 1 }))
                  }
                >
                  +
                </button>
              </div>

              {/* Price */}
              <div className="col-span-2 text-center">
                ${(item.product.price * item.count).toFixed(2)}
              </div>

              {/* Action */}
              <div className="col-span-2 text-center">
                <button
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                  className="text-gray-800 font-bold bg-gray-200 rounded-full w-full h-6 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                >
                  REMOVE <FiTrash />
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-80">
          <h3 className="text-gray-800 font-bold text-lg mb-4">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Products total</span>
            <span className="font-semibold text-gray-800">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Shipping</span>
            <span className="font-semibold text-gray-800">${shippingCost.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Discount</span>
            <span className="font-semibold text-green-600">-${discount.toFixed(2)}</span>
          </div>

          <hr className="border-gray-200 mb-4" />

          <div className="flex justify-between mb-4">
            <span className="font-bold text-gray-800">Total</span>
            <span className="font-bold text-gray-800">${finalTotal.toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-400 text-white font-semibold py-2 rounded hover:bg-blue-500 transition-colors mb-2">
            Create Order
          </button>

          <p className="text-center text-gray-400 text-sm">
            Free shipping for orders over $150.
          </p>
        </div>

      </div>
      <Footer />
    </>
  );
}
