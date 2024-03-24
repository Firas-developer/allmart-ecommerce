import Navigation from "../../utils/Navigation"
import product2 from "../../Assets/images/product2.png"
function Camera(){
    return(
        <div>
            <Navigation/>
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-24 pb-14 px-5 w-fit">
                    <img src={product2} alt="" style={{height:"70%"}}/>
            </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black) If you are a photography enthusiast, then the Canon EOS 3000D DSLR Camera is a must-have gadget. Featuring an 18 MP (APS-C) CMOS sensor and the DIGIC 4+ imaging processor, you can capture amazing photos of your subject at all times, even in low-light conditions.</p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">2,345 Ratings & 213 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹33,990</span> <s className="mx-2">₹35,000 </s> <b className="text-green-800">5% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default Camera