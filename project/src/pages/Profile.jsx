import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logout } from "../store/reducers/clientSlice";
import { clearOrders } from "../store/reducers/ordersSlice"; // ✅ Clear için import
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function ProfilePage() {
    const { user } = useSelector((state) => state.client);
    const addresses = useSelector((state) => state.address.addresses);
    const payment = useSelector((state) => state.payment.payment);
    const orders = useSelector((state) => state.orders.list);
    const dispatch = useDispatch();
    const location = useLocation();

    const [activeTab, setActiveTab] = useState("overview");

    useEffect(() => {
        if (location.state?.tab) {
            setActiveTab(location.state.tab);
        }
    }, [location.state]);

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = "/login";
    };

    const handleClearOrders = () => {
        if (window.confirm("Tüm sipariş geçmişini silmek istediğinize emin misiniz?")) {
            dispatch(clearOrders());
        }
    };

    const tabs = [
        { key: "overview", label: "Overview" },
        { key: "addresses", label: "Addresses" },
        { key: "payments", label: "Payment Methods" },
        { key: "orders", label: "Orders" },
        { key: "security", label: "Security" },
    ];

    return (
        <>
            <Header />
            <div className="max-w-5xl mx-auto p-4 sm:p-6">
                {/* Üst Kullanıcı Kartı */}
                <div className="bg-white border rounded-xl shadow-sm p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://www.gravatar.com/avatar/?d=identicon"
                            alt="avatar"
                            className="w-16 h-16 rounded-full border"
                        />
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                                {user?.name || "someone"}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                {user?.email || "someone@example.com"}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="cursor-pointer px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 self-start sm:self-auto"
                    >
                        Logout
                    </button>
                </div>

                {/* Sekmeler */}
                <div className="flex gap-2 sm:gap-4 mt-6 border-b pb-2 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`cursor-pointer px-3 sm:px-4 py-2 whitespace-nowrap rounded-t-lg font-medium ${activeTab === tab.key
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "overview" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-gray-500 text-sm">Cart Items</h3>
                                <p className="text-2xl font-bold text-gray-800">1</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-gray-500 text-sm">Favorites</h3>
                                <p className="text-2xl font-bold text-gray-800">0</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="text-gray-500 text-sm">Orders</h3>
                                <p className="text-2xl font-bold text-gray-800">0</p>
                            </div>
                        </div>
                    )}

                    {activeTab === "addresses" && (
                        <div className="p-4 bg-white rounded-lg shadow-sm border">
                            {addresses.length === 0 ? (
                                <p className="text-gray-500">No addresses saved.</p>
                            ) : (
                                <ul className="space-y-3">
                                    {addresses.map((addr, i) => (
                                        <li
                                            key={i}
                                            className="p-3 border rounded-lg flex flex-col gap-1"
                                        >
                                            <span className="font-semibold">{addr.fullName}</span>
                                            <span>
                                                {addr.street}, {addr.city}
                                            </span>
                                            <span>{addr.country}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {activeTab === "payments" && (
                        <div className="p-4 bg-white rounded-lg shadow-sm border">
                            {payment ? (
                                <div className="flex flex-col gap-2">
                                    <p>
                                        <span className="font-semibold">Cardholder:</span>{" "}
                                        {payment.cardName}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Card Number:</span>{" "}
                                        {payment.cardNumber}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Expiry:</span>{" "}
                                        {payment.expiry}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-gray-500">No payment method saved.</p>
                            )}
                        </div>
                    )}

                    {activeTab === "orders" && (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">My Orders</h2>
                                {orders.length > 0 && (
                                    <button
                                        onClick={handleClearOrders}
                                        className="cursor-pointer px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                                    >
                                        Clear Orders
                                    </button>
                                )}
                            </div>

                            {orders.length === 0 ? (
                                <p className="text-gray-500">No orders yet.</p>
                            ) : (
                                orders.map((order) => (
                                    <div key={order.id} className="border p-4 mb-4 rounded shadow-sm">
                                        <p className="font-semibold">Order #{order.id}</p>
                                        <p className="text-sm text-gray-500">{order.date}</p>
                                        <p className="font-bold">Total: ${order.total.toFixed(2)}</p>

                                        <ul className="mt-2">
                                            {order.items.map((item) => (
                                                <li key={item.product.id} className="flex justify-between text-sm">
                                                    <span>{item.product.title} x {item.count}</span>
                                                    <span>${(item.product.price * item.count).toFixed(2)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
