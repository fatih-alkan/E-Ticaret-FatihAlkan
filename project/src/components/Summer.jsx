import summerBanner from '../images/header-img/summer-banner.png'

export default function Summer() {
    return (
        <>
            <div className="relative w-full h-[1190px] bg-cover bg-center bg-[#23856D] text-white  flex flex-col justify-center items-center text-center gap-4">
                <p className="mt-40">SUMMER 2020</p>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h2 className="text-4xl font-bold mt-2">Vita Classic</h2>
                        <h2 className="text-4xl font-bold">Product</h2>
                    </div>
                    <p className="mt-4 text-m max-w-[280px] text-white">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <span className="font-bold text-2xl text-white">$16.48</span>
                </div>

                <div className="absolute left-4 top-[42%] transform -translate-y-1/2 text-7xl cursor-pointer">
                    &lt;
                </div>
                <div className="absolute right-4 top-[42%] transform -translate-y-1/2 text-7xl cursor-pointer">
                    &gt;
                </div>


                <button className=" bg-green-500 text-white font-bold mt-4 px-14 py-3 rounded hover:bg-green-600 transition">
                    ADD TO CART
                </button>
                <img src={summerBanner} alt="" />
            </div>
        </>
    );
}