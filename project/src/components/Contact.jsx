import { FaBars } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone, FiClock } from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';
import insta from '../images/header-img/insta.png'
import face from '../images/header-img/face.png'
import youtube from '../images/header-img/youtube.png'
import twitter from '../images/header-img/twitter.png'
export default function Contact() {
    return (
        <>
            <div className="max-[768px]:hidden relative flex h-120 w-[70%] mx-auto mt-16 bg-gray-300">
                <div className="flex flex-col flex-1/8 justify-between items-center pt-4">
                    <h3 className='font-bold text-xl text-[#252B42] '>Bandage</h3>
                    <button className="text-2xl text-white bg-[#23A6F0] p-4 rounded-2xl cursor-pointer">
                        <FaBars />
                    </button>
                    <div></div>
                </div>
                <div className="flex-6/8 flex  items-center">
                    <div className='w-140 mx-auto flex flex-col gap-6'>
                        <h3 className='font-bold text-5xl text-[#252B42] '>Contact Us</h3>
                        <p className='w-90'>Feel free to contact us any time. We will get back to you as soon as we can!</p>
                        <form action="" className='flex flex-col gap-2'>
                            <input type="text" className='h-10 bg-white w-80 rounded-xl' />
                            <input type="email" name="" id="" className='h-10 bg-white w-80 rounded-xl' />
                            <input type="text" name="" id="" className='h-10 bg-white w-80 rounded-xl' />
                            <button className='bg-gray-700 font-bold text-xl text-white py-2 px-6 w-80 cursor-pointer rounded-xl'>SEND</button>
                        </form>
                    </div>

                </div>
                <div className="flex-1/8 bg-[#23A6F0] items-end flex pb-4">
                    <div className='flex gap-2'>
                        <a href=""><img src={insta} alt="" /></a>
                        <a href=""><img src={youtube} alt="" /></a>
                        <a href=""><img src={face} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                    </div>
                </div>
                <div className='absolute bg-gray-700 h-80 w-100 left-[665px] top-[100px]'>
                    <div className='flex flex-col gap-8 pl-8 pt-10'>
                        <h3 className='font-bold text-white text-3xl'>Info</h3>
                        <div className='flex flex-col gap-4'>

                            <div className="flex items-center gap-4 text-white text-xl">
                                <HiOutlineMail />
                                <span>info@getintouch.we</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <FiPhone />
                                <span>+24 56 89 146</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <FaBuilding />
                                <span>14 Greenroad St.</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <FiClock />
                                <span>09:00 - 18:00</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className='md:hidden flex flex-col gap-8 bg-gray-300 w-[80%] mx-auto mt-16 p-4 rounded-xl'>
                <div className="flex justify-between items-center pt-4">
                    <h3 className='font-bold text-xl text-[#252B42] '>Bandage</h3>
                    <button className="text-2xl text-white bg-[#23A6F0] p-2 rounded-2xl cursor-pointer">
                        <FaBars />
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <div className='max-w-140 mx-auto flex flex-col gap-6'>
                        <div className='flex flex-col gap-4 pl-4'>
                            <h3 className='font-bold text-4xl text-[#252B42] w-60'>Contact Us</h3>
                            <p className='w-60'>Feel free to contact us any time. We will get back to you as soon as we can!</p>
                        </div>
                        <form action="" className='flex flex-col gap-2'>
                            <input type="text" className='h-10 bg-white w-70 rounded-xl' />
                            <input type="email" name="" id="" className='h-10 bg-white w-70 rounded-xl' />
                            <input type="text" name="" id="" className='h-10 bg-white w-70 rounded-xl' />
                            <button className='bg-gray-700 font-bold text-xl text-white py-2 px-6 w-70 cursor-pointer rounded-xl'>SEND</button>
                        </form>
                    </div>
                </div>
                <div className=' bg-gray-700 h-70 w-70 rounded-xl m-auto'>
                    <div className='flex flex-col gap-8 pl-8 pt-6 '>
                        <h3 className='font-bold text-white text-3xl'>Info</h3>
                        <div className='flex flex-col gap-4'>

                            <div className="flex items-center gap-4 text-white text-xl">
                                <HiOutlineMail />
                                <span>info@getintouch.we</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <FiPhone />
                                <span>+24 56 89 146</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <FaBuilding />
                                <span>14 Greenroad St.</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <FiClock />
                                <span>09:00 - 18:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div></div>
                    <div className="bg-[#23A6F0] w-40 py-2 px-1 rounded-xl">
                    <div className='flex gap-2'>
                        <a href=""><img src={insta} alt="" /></a>
                        <a href=""><img src={youtube} alt="" /></a>
                        <a href=""><img src={face} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}