import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactOffice() {
    const [active, setActive] = useState(2);

    // kart bilgilerini tek array ile yönetelim
    const cards = [
        {
            id: 1,
            icon: <FaPhoneAlt className="text-4xl mb-4" />,
            email1: "georgia.young@example.com",
            email2: "georgia.young@ple.com",
            title: "Get Support",
        },
        {
            id: 2,
            icon: <FaMapMarkerAlt className="text-4xl mb-4" />,
            email1: "georgia.young@example.com",
            email2: "georgia.young@ple.com",
            title: "Get Support",
        },
        {
            id: 3,
            icon: <MdEmail className="text-4xl mb-4" />,
            email1: "georgia.young@example.com",
            email2: "georgia.young@ple.com",
            title: "Get Support",
        },
    ];

    return (
        <div className="font-montserrat text-center py-16 px-4 max-[768px]:mt-16">
            {/* Header */}
            <div className="mb-12">
                <p className="uppercase text-sm tracking-widest text-[#252B42] font-bold">
                    Visit Our Office
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#252B42] mt-2">
                    We help small businesses <br /> with big ideas
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {cards.map((card) => {
                    const isActive = active === card.id;

                    return (
                        <div
                            key={card.id}
                            onClick={() => setActive(card.id)}
                            className={`flex flex-col items-center rounded-md cursor-pointer transition p-24 ${isActive
                                    ? "bg-[#252B42] text-white"
                                    : "bg-white text-[#252B42]"
                                }`}
                        >
                            {/* ikon */}
                            <div
                                className={`${isActive ? "text-[#23A6F0]" : "text-[#23A6F0]"
                                    }`}
                            >
                                {card.icon}
                            </div>

                            {/* Email */}
                            <p
                                className={`text-sm ${isActive ? "text-white" : "text-[#737373]"
                                    }`}
                            >
                                {card.email1}
                            </p>
                            <p
                                className={`text-sm mb-4 ${isActive ? "text-white" : "text-[#737373]"
                                    }`}
                            >
                                {card.email2}
                            </p>

                            {/* Başlık */}
                            <h4
                                className={`font-semibold mb-4 ${isActive ? "text-white" : "text-[#252B42]"
                                    }`}
                            >
                                {card.title}
                            </h4>

                            {/* Buton */}
                            <button
                                className={`w-48 border px-6 py-2 rounded-3xl transition ${isActive
                                        ? "border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                                        : "border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                                    }`}
                            >
                                Submit Request
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
