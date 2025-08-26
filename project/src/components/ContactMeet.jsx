import contactArrow from "../images/contactPage-img/contact-arrow.png"
export default function ContactMeet() {
    return (
        <>
            <div className="font-montserrat text-center py-16 px-4 flex flex-col gap-6">
                <div className="flex justify-center">
                <img src={contactArrow} alt="" />
                </div>
                <p className="uppercase text-sm tracking-widest text-[#252B42] font-bold">
                    WE Can't WAIT TO MEET YOU
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mt-2">Let’s Talk</h2>
                <button className="w-44 bg-[#23A6F0] text-white px-4 py-2 rounded m-auto">Try it free now</button>
            </div>
        </>
    )
}