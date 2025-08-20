import featured1 from '../images/featured-img/featured1.jpg'
import featured2 from '../images/featured-img/featured2.jpg'
import featured3 from '../images/featured-img/featured3.jpg'
import clock from '../images/featured-img/clock.png'
import statics from '../images/featured-img/static.png'
import arrow from '../images/featured-img/arrow.png'
const featuredImages = [featured1, featured2, featured3];
export default function FeaturedProducts() {
    return (
        <>
            <div className="flex flex-col items-center h-[2100px] w-full md:max-h-[900px] mt-16">
                <div className="flex flex-col items-center h-[184px] gap-2 mb-10">
                    <h6 className="text-[#23A6F0]">Practice Advice</h6>
                    <div>
                        <h2 className="text-4xl font-bold">Featured</h2>
                        <h2 className="text-4xl font-bold">Products</h2>
                    </div>
                    <p className="mt-4 text-m max-w-[240px] text-[#737373] text-center">Problems trying to resolve the conflict between the two major</p>
                </div>
                <div className='md:flex md:flex-wrap flex-[32%] gap-8'>
                    {featuredImages.map((img, index) => (
                        <div key={index} className="relative hover:bottom-4 max-w-[328px] max-h-[606px] mt-10 pb-10 rounded-lg overflow-hidden shadow-lg bg-white">

                            <div className="relative">
                                <img
                                    className="w-[330px] h-[300px] object-cover m-auto"
                                    src={img}
                                    alt="Card visual"
                                />
                                <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded">
                                    NEW
                                </span>
                            </div>

                            <div className="px-5 py-4">

                                <div className="text-xs text-gray-400 space-x-2 mb-4">
                                    <span className="text-[#8EC2F2]">Google</span>
                                    <span className='text-[#737373]'>Trending</span>
                                    <span className='text-[#737373]'>New</span>
                                </div>

                                <h2 className="text-lg font-semibold text-[#252B42] mb-2 leading-tight">
                                    Loudest à la Madison #1 (L'integral)
                                </h2>

                                <p className="text-[#737373] text-sm mb-4">
                                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                                </p>
                                <div className="flex justify-between text-gray-400 text-sm">
                                    <div className="flex items-center space-x-1">
                                        <img src={clock} alt="" />
                                        <span className="text-[#737373] text-sm ">22 April 2021</span>
                                    </div>

                                    <div className="flex items-center space-x-1">
                                        <img src={statics} alt="" />
                                        <span className="text-[#737373] text-sm ">10 comments</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="text-[] font-semibold hover:underline flex items-center space-x-1 text-sm"
                                    >
                                        <h6 className="text-[#737373] text-[14px] font-bold">Learn More</h6>
                                        <img className='ml-2' src={arrow} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
}