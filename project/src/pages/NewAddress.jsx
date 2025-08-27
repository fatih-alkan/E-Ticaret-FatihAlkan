import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../store/reducers/addressSlice";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { toast } from "react-toastify";

export default function NewAddress() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData) {
            if (!formData[key].trim()) {
                toast.error("Lütfen tüm alanları doldurun!");
                return;
            }
        }
        dispatch(addAddress(formData));
        toast.success("Adres başarıyla eklendi ✅");
        navigate("/checkout/address");
    };


    return (
        <>
            <Header />
            <div>
                <h2 className="text-[#252B42] font-bold text-2xl mt-12 text-center">Add New Address</h2>
            </div>
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
            >
                <div>
                    <label className="block text-gray-700 font-medium mb-1"> Address Title </label>
                    <input type="text" name="title" placeholder="Home / Office ..." value={formData.title} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1"> Name </label>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1"> Surname </label>
                        <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1"> Phone </label>
                    <input type="tel" name="phone" placeholder="+90..." value={formData.phone} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1"> City </label>
                        <select name="city" value={formData.city} onChange={handleChange} className="border rounded-md p-2 w-full" >
                            <option value="">Select...</option>
                            <option value="Istanbul">İstanbul</option>
                            <option value="Ankara">Ankara</option>
                            <option value="Izmir">İzmir</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1"> District </label>
                        <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} className="border rounded-md p-2 w-full" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1"> Neighborhood </label>
                    <input type="text" name="neighborhood" placeholder="Neighborhood" value={formData.neighborhood} onChange={handleChange} className="border rounded-md p-2 w-full" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1"> Address </label>
                    <textarea name="address" placeholder="Street, building, no..." value={formData.address} onChange={handleChange} className="border rounded-md p-2 w-full h-24" />
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        className="border rounded-md py-2 px-4 text-gray-600 hover:bg-gray-100"
                        onClick={() =>
                            setFormData({
                                title: "",
                                name: "",
                                surname: "",
                                phone: "",
                                city: "",
                                district: "",
                                neighborhood: "",
                                address: "",
                            })
                        }
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-[#23A6F0] text-white py-2 px-6 rounded hover:bg-white hover:text-[#252B42] hover:border-2"
                    >
                        Save Address
                    </button>
                </div>
            </form>
            <Footer />
        </>
    );
}
