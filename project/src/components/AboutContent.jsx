

export default function AboutContent() {

    return (
        <>
            <div className="flex flex-col gap-8 font-montserrat max-w-[1020px] m-auto">

                <span className="text-red-600 max-[768px]:text-center">Problems trying</span>
                <div className="flex justify-between max-[768px]:flex-col max-[768px]:px-8 max-[768px]:gap-4">
                    <h4 className="max-w-[390px] font-bold max-[768px]:text-center">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h4>
                    <p className="max-w-[530px] text-[14px] text-[#737373] max-[768px]:text-[12px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
            <div className="max-w-[920px] grid grid-cols-4 gap-6 text-center m-auto mt-16 font-montserrat max-[768px]:grid-cols-1 max-[768px]:gap-16">
                <div className="gap-4 flex flex-col">
                    <h3 className="font-bold text-5xl ">15K</h3>
                    <p className="text-[14px] text-[#737373]">Happy Customers</p>
                </div>
                <div className="gap-4 flex flex-col">
                    <h3 className="font-bold text-5xl">150K</h3>
                    <p className="text-[14px] text-[#737373]">Monthly Visitors</p>
                </div>
                <div className="gap-4 flex flex-col">
                    <h3 className="font-bold text-5xl">15</h3>
                    <p className="text-[14px] text-[#737373]">Countries Worldwide</p>
                </div>
                <div className="gap-4 flex flex-col">
                    <h3 className="font-bold text-5xl">100+</h3>
                    <p className="text-[14px] text-[#737373]">Top Partners</p>
                </div>
            </div>

        </>
    );
}