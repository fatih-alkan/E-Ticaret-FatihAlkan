import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAddress, selectAddress } from "../store/reducers/addressSlice";
import { toast } from "react-toastify";

export default function OrderAddress() {
    const cart = useSelector((state) => state.shoppingCart.cart);
    const { addresses, selectedAddress } = useSelector((state) => state.address);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!cart.length) return <div className="text-center">Sepetiniz Boş</div>;

    const totalPrice = cart
        .filter((item) => item.checked)
        .reduce((acc, item) => acc + item.product.price * item.count, 0);
    const shippingCost = totalPrice > 150 ? 0 : 15;
    const discount = totalPrice > 200 ? 20 : 0;
    const finalTotal = totalPrice + shippingCost - discount;

    return (
        <div className="max-w-[1180px] m-auto py-8 flex flex-col-reverse md:flex-row gap-6 justify-between mt-16">
            <div className="bg-white shadow-md p-4 flex-1">
                <h3 className="text-[#252B42] font-bold text-2xl mb-4">
                    Create Order - Address
                </h3>

                <div className="flex justify-between text-gray-500 font-semibold text-l mb-2">
                    <div>Shipping Address</div>
                    <div
                        className="text-blue-400 font-bold cursor-pointer"
                        onClick={() => navigate("newaddress")}
                    >
                        + Add Address
                    </div>
                </div>
                <hr className="text-gray-500 mb-2" />

                <div className="max-w-2xl mt-6 flex flex-col gap-3">
                    {addresses.length > 0 ? (
                        addresses.map((addr, i) => (
                            <div key={i} className="border p-4 rounded-md shadow-sm relative flex gap-2 items-start">
                                <input
                                    type="radio"
                                    name="selectedAddress"
                                    checked={selectedAddress === i}
                                    onChange={() => dispatch(selectAddress(i))}
                                    className="mt-1"
                                />
                                <div className="flex-1">
                                    <h3 className="font-bold">{addr.title}</h3>
                                    <p>{addr.name} {addr.surname}</p>
                                    <p>{addr.phone}</p>
                                    <p>{addr.city}, {addr.district}, {addr.neighborhood}</p>
                                    <p>{addr.address}</p>
                                </div>
                                <button
                                    onClick={() => dispatch(clearAddress(i))}
                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400">No address added yet.</p>
                    )}
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        onClick={() => {
                            if (selectedAddress === null) {
                                toast.error("Lütfen bir adres seçin!");
                                return;
                            }
                            navigate("/checkout/payment");
                        }}
                        className={`px-4 py-2 rounded ${selectedAddress !== null ? "bg-blue-400 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                        disabled={selectedAddress === null}
                    >
                        Save & Continue
                    </button>
                </div>
            </div>

            {/* Order Summary kısmı aynı */}


            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-80">
                <h3 className="text-gray-800 font-bold text-lg mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Products total</span>
                    <span className="font-semibold text-gray-800">
                        ${totalPrice.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-semibold text-gray-800">
                        ${shippingCost.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className="text-gray-500">Discount</span>
                    <span className="font-semibold text-green-600">
                        -${discount.toFixed(2)}
                    </span>
                </div>
                <hr className="border-gray-200 mb-4" />
                <div className="flex justify-between mb-4">
                    <span className="font-bold text-gray-800">Total</span>
                    <span className="font-bold text-gray-800">
                        ${finalTotal.toFixed(2)}
                    </span>
                </div>
                <p className="text-center text-gray-400 text-sm">
                    Free shipping for orders over $150.
                </p>
            </div>
        </div>
    );
}
