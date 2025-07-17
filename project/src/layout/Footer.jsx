import facebook from "../images/footer-img/facebook.png"
import instagram from "../images/footer-img/instagram.png"
import twitter from "../images/footer-img/twitter.png"
export default function Footer() {
    return (
        <>
            <div className="flex flex-col items-start h-[1400px] ">
                <div className="bg-[#FAFAFA] w-full mt-20 mb-20">
                    <div className="flex flex-col mx-auto my-auto w-[325px] h-[173] ">
                        <h3 className="text-[#252B42] font-bold text-2xl">Bandage</h3>
                        <div className="flex gap-4 mt-8">
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={instagram} alt="" /></a>
                            <a href=""><img src={twitter} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="h-[1071px] w-[321px] mx-auto flex flex-col items-start gap-2">
                    <div className="flex flex-col gap-2 mb-16">
                        <h5 className="text-[#252B42] mb-2 font-bold text-[16px]">Company Info</h5>
                        <a href="" className="text-[#737373] text-[14px] font-bold">About Us</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Carrier</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">We are hiring</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Blog</a>
                    </div>
                    <div className="flex flex-col gap-2 mb-16">
                        <h5 className="text-[#252B42] mb-2 font-bold text-[16px]">Legal</h5>
                        <a href="" className="text-[#737373] text-[14px] font-bold">About Us</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Carrier</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">We are hiring</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Blog</a>
                    </div>
                    <div className="flex flex-col gap-2 mb-16">
                        <h5 className="text-[#252B42] mb-2 font-bold text-[16px]">Features</h5>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Business Marketing</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">User Analytic</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Live Chat</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Unlimited Support</a>
                    </div>
                    <div className="flex flex-col gap-2 mb-16">
                        <h5 className="text-[#252B42] mb-2 font-bold text-[16px]">Resources</h5>
                        <a href="" className="text-[#737373] text-[14px] font-bold">IOS & Android</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Watch a Demo</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">Customers</a>
                        <a href="" className="text-[#737373] text-[14px] font-bold">API</a>
                    </div>
                    <div className="flex flex-col gap-2 mb-16">
                        <h5 className="text-[#252B42] mb-2 font-bold text-[16px]">Get in Touch</h5>
                        <div className="flex">
                        <input placeholder="Your Email" type="text" id="subscribe" name="subscribe" className="bg-[#E6E6E6] text-[#737373] border-2 rounded-sm px-4 border-gray-300"/>
                        <button for="subscribe" className="bg-[#23A6F0] text-white py-2 px-4 rounded-sm hover:bg-white hover:text-[#23A6F0] hover:border-2">Subscribe</button>
                        </div>
                        <p className="text-[#737373]">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="mx-auto bg-[#FAFAFA] my-auto w-full text-center">
                        <h6 className="text-[16px] font-bold text-[#737373]">Made With Love By</h6>
                        <h6 className="text-[16px] font-bold text-[#737373]">Finland All Right Reserved</h6>
                    </div>
                </div>
            </div>
        </>
    );
}