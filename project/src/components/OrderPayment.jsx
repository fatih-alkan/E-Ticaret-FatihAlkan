import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { clearPayment } from "../store/reducers/paymentSlice";
import { addOrder } from "../store/reducers/ordersSlice";
import { clearCart } from "../store/reducers/shoppingCartSlice";
export default function OrderPayment() {
    const cart = useSelector((state) => state.shoppingCart.cart);
    const payment = useSelector((state) => state.payment.payment);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cvvInput, setCvvInput] = useState("");

    if (!cart.length) return <div className="text-center">Sepetiniz Boş</div>;

    const totalPrice = cart
        .filter((item) => item.checked)
        .reduce((acc, item) => acc + item.product.price * item.count, 0);
    const shippingCost = totalPrice > 150 ? 0 : 15;
    const discount = totalPrice > 200 ? 20 : 0;
    const finalTotal = totalPrice + shippingCost - discount;

    const handleConfirm = () => {
        const cvvRegex = /^[0-9]{3}$/;
        if (!payment) {
            toast.error("Add a card first");
            return;
        }
        if (cvvRegex.test(cvvInput)) {
            const order = {
                id: Date.now(),
                items: cart.filter((item) => item.checked),
                total: finalTotal,
                date: new Date().toLocaleString(),
            };

            dispatch(addOrder(order));
            dispatch(clearCart());   
            toast.success("Order successful!");

            navigate("/");
        } else {
            toast.error("Please enter a valid CVV!");
        }
    };

    const handleDeleteCard = () => {
        dispatch(clearPayment());
        toast.info("Card information has been deleted");
    };

    return (
        <div className="max-w-[1180px] m-auto py-8 flex flex-col-reverse md:flex-row gap-6 justify-between mt-16">
            <div className="bg-white shadow-md p-4 flex-1">
                <h3 className="text-[#252B42] font-bold text-2xl mb-4">
                    Create Order - Payment
                </h3>

                <div className="flex justify-between text-gray-500 font-semibold text-l mb-2">
                    <div>Card Information</div>
                    <div
                        className="text-blue-400 font-bold cursor-pointer"
                        onClick={() => navigate("newpayment")}
                    >
                        + Add Card
                    </div>
                </div>
                <hr className="text-gray-500 mb-2" />

                <div className="max-w-2xl mt-6">
                    {payment ? (
                        <div className="border p-4 rounded-md mb-2 shadow-sm space-y-2 relative">
                            <h3 className="font-bold">Saved Card</h3>
                            <p>{payment.cardName}</p>
                            <p>{payment.cardNumber}</p>
                            <p>Expiry: {payment.expiry}</p>

                            {/* CVV Input */}
                            <div className="mt-4">
                                <label className="block text-gray-700 font-medium mb-1">
                                    Enter CVV
                                </label>
                                <input
                                    type="password"
                                    maxLength="3"
                                    value={cvvInput}
                                    onChange={(e) => setCvvInput(e.target.value)}
                                    className="border rounded-md p-2 w-28"
                                    placeholder="***"
                                />
                            </div>

                            {/* Delete button */}
                            <button
                                onClick={handleDeleteCard}
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                    ) : (
                        <p className="text-gray-400">No card added yet.</p>
                    )}
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        onClick={handleConfirm}
                        className="bg-blue-400 text-white px-4 py-2 rounded"
                    >
                        Confirm Order
                    </button>
                </div>
            </div>

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
