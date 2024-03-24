import product1 from "../Assets/images/product1.png"
import product2 from "../Assets/images/product2.png"
import product3 from "../Assets/images/product3.png"
import product4 from "../Assets/images/product4.png"
import product5 from "../Assets/images/product5.png"
import product6 from "../Assets/images/product6.png"
import product7 from "../Assets/images/product7.png"
import product8 from "../Assets/images/product8.png"
import product9 from "../Assets/images/product9.png"
import product10 from "../Assets/images/product10.png"
import FeaturedProducts from "./FeaturedProducts"
import Brands from "./Brands"
import FashionProducts from "./FashionProducts"
import GifAnimation from "./GifAnimation"
function Service({handleClick,removeCart,setRemoveCart,noCart,setNoCart}) {
    return (
        <div className="mt-10 md:p-10 md:pl-15 p-5" style={{ backgroundColor: "#C6FFF9" }}>
            {/* Product Services */}
            <div className="grid md:grid-cols-5 grid-cols-2 gap-5 md:ml-14">
                <div className="flex gap-2 items-center">
                    <i class="fa-solid fa-truck text-blue-950 text-xl"></i>
                    <div className="md:text-sm">
                        <b>Free Shipping</b>
                        <p style={{ fontSize: "10px" }}>From all over orders 500rs</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <i class="fa-solid fa-gift text-blue-950 text-xl"></i>
                    <div className="text-sm">
                        <b>Daily Surprise Offers</b>
                        <p style={{ fontSize: "10px" }}>Save upto 25%</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <i class="fa-solid fa-headphones text-blue-950 text-xl"></i>
                    <div className="text-sm">
                        <b>Support 24/7</b>
                        <p style={{ fontSize: "10px" }}>Shop with an expert</p>
                    </div>
                </div>
                <div className="hidden md:flex gap-2 items-center">
                    <i class="fa-solid fa-percent text-blue-950 text-xl"></i>
                    <div className="text-sm">
                        <b>Affordable Prices</b>
                        <p style={{ fontSize: "10px" }}>Net Whole Price</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <i class="fa-solid fa-credit-card text-blue-950 text-xl"></i>
                    <div className="text-sm">
                        <b>Secure Payments</b>
                        <p style={{ fontSize: "10px" }}>100% Protected Payments</p>
                    </div>
                </div>
            </div>
            {/* Product Items */}
            <div className="mt-5 grid md:grid-cols-5 md:grid-rows-2 gap-5 grid-cols-2 grid-rows-4 bg-white md:p-10 p-10">
                <div className="flex items-center gap-10 md:gap-20">
                    <div className="text-sm">
                        <b>Laptops</b>
                        <p className="text-xs">8 items</p>
                    </div>
                    <img src={product1} alt="" style={{width:"25%"}}/>
                </div>
                <div className="md:flex hidden items-center gap-1">
                    <div className="text-sm">
                        <b>Cameras & Videos</b>
                        <p className="text-xs">10 items</p>
                    </div>
                    <img src={product2} alt="" style={{width:"25%"}}/>
                </div>
                <div className="flex items-center md:gap-5 gap-10">
                    <div className="text-sm">
                        <b>TV</b>
                        <p className="text-xs">12 items</p>
                    </div>
                    <img src={product3} alt="" style={{width:"30%"}}/>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-sm">
                        <b>Smart Watches</b>
                        <p className="text-xs">18 items</p>
                    </div>
                    <img src={product4} alt="" style={{width:"25%"}}/>
                </div>
                <div className="flex items-center gap-1">
                    <div className="text-sm">
                        <b>Music & Gaming</b>
                        <p className="text-xs">5 items</p>
                    </div>
                    <img src={product5} alt="" style={{width:"25%"}}/>
                </div>
                <div className="flex items-center gap-3 md:gap-7">
                    <div className="text-sm">
                        <b>Mobile & Tabets</b>
                        <p className="text-xs">2 items</p>
                    </div>
                    <img src={product6} alt="" style={{width:"25%"}}/>
                </div>
                <div className="md:flex hidden items-center gap-3 md:gap-11">
                    <div className="text-sm">
                        <b>Headphones</b>
                        <p className="text-xs">23 items</p>
                    </div>
                    <img src={product7} alt="" style={{width:"25%"}}/>
                </div>
                <div className="flex items-center gap-5 md:gap-1">
                    <div className="text-sm">
                        <b>Accessories</b>
                        <p className="text-xs">12 items</p>
                    </div>
                    <img src={product8} alt="" style={{width:"25%"}}/>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <b>Portable Speakers</b>
                        <p className="text-xs">6 items</p>
                    </div>
                    <img src={product9} alt="" style={{width:"25%"}}/>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-sm">
                        <b>Home Appliances</b>
                        <p className="text-xs">4 items</p>
                    </div>
                    <img src={product10} alt="" style={{width:"25%"}}/>
                </div>
            </div>
            <Brands/>
            <FeaturedProducts handleClick={handleClick}/>
            <FashionProducts handleClick={handleClick}/>
            <GifAnimation/>
        </div>
    )
}
export default Service