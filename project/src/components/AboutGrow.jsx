import aboutGrow from "../images/aboutPage-img/about-grow.jpg"
export default function AboutGrow(){
    return (
        <>
        <div className="flex m-auto max-w-full md:max-h-[636px] justify-center mt-16">
            <div className="bg-[#00A1C1] md:max-w-[950px] py-24">
                <div className="flex flex-col text-white font-montserrat max-w-1/2 m-auto gap-8">
                <h4 className="font-bold">WORK WITH US</h4>
                <h3 className="font-bold text-3xl">Now Let's grow Yours</h3>
                <p className="text-[12px] w-full">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                <button className="border w-1/3 py-1 rounded hover:text-[#00A1C1] hover:border-[#00A1C1] hover:bg-white duration-400 active:shadow-xl">Button</button>
                </div>
            </div>
            <div className=" max-w-[590px] max-[768px]:hidden">
                <img src={aboutGrow} alt="" className="w-full max-h-[636px]"/>
            </div>
        </div>
        </>
    )
}