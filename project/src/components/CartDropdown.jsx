import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCount, toggleChecked } from "../store/reducers/shoppingCartSlice";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
export default function CartDropdown() {
    const cart = useSelector((state) => state.shoppingCart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (!cart.length) return <div className="p-4 text-center">Sepetiniz boş</div>;

    // Seçili ürünlerin toplamı
    const totalPrice = cart
        .filter(item => item.checked)
        .reduce((acc, item) => acc + item.product.price * item.count, 0)
        .toFixed(2);

    return (
        <div className="bg-white shadow-md p-4 w-70 mx-auto max-[768px]:w-80">
            <h3 className="text-[#252B42] font-bold">My Cart ({cart.length})</h3>
            {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
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
                        <div>
                            <p className="font-semibold text-[14px]">{item.product.title}</p>
                            <p className="text-[12px]">${item.product.price} x {item.count}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center p-1 hover:bg-gray-300 cursor-pointer"
                            onClick={() => dispatch(updateCount({ productId: item.product.id, count: item.count - 1 }))}
                            disabled={item.count === 1}
                        >
                            -
                        </button>
                        <span>{item.count}</span>
                        <button
                            className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center p-1 hover:bg-gray-300 cursor-pointer"
                            onClick={() => dispatch(updateCount({ productId: item.product.id, count: item.count + 1 }))}
                        >
                            +
                        </button>
                        <button

                            onClick={() => dispatch(removeFromCart(item.product.id))}
                            className="text-red-500 font-bold bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center p-1 hover:bg-gray-300 cursor-pointer"
                        >
                            <FiTrash />
                        </button>
                    </div>
                </div>
            ))}

            {/* Toplam Fiyat */}
            <div className="border-t mt-2 pt-2 text-right font-bold">
                Toplam: ${totalPrice}
            </div>
            <div className="flex justify-between mt-2">
                <button onClick={(e) => { e.preventDefault(); navigate('/shoppingcard'); }} className="p-2 border rounded-xl hover:bg-gray-800 hover:text-white">Go to Cart</button>
                <button className="p-2 border rounded-xl hover:bg-gray-800 hover:text-white">Checkout</button>
            </div>
        </div>
    );
}
