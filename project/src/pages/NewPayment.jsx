import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPayment } from "../store/reducers/paymentSlice";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function NewPayment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPayment(formData)); 
    navigate("/checkout/payment");
  };

  return (
    <>
      <Header />
      <h2 className="text-[#252B42] font-bold text-2xl mt-12 text-center">
        Payment Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            name="cardName"
            placeholder="John Doe"
            value={formData.cardName}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            value={formData.cardNumber}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              maxLength="5"
              value={formData.expiry}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">CVV</label>
            <input
              type="password"
              name="cvv"
              placeholder="123"
              maxLength="4"
              value={formData.cvv}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
              required
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="border rounded-md py-2 px-4 text-gray-600 hover:bg-gray-100"
            onClick={() =>
              setFormData({
                cardName: "",
                cardNumber: "",
                expiry: "",
                cvv: "",
              })
            }
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#23A6F0] text-white py-2 px-6 rounded hover:bg-white hover:text-[#252B42] hover:border-2"
          >
            Save Card
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}
