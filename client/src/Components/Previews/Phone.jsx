import Navigation from "../../utils/Navigation"
import product6 from "../../Assets/images/product6.png"
function Phone() {
    return (
        <div>
            <Navigation />
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-24 pb-14 px-5 w-fit">
                    <img src={product6} alt="" className="md:ml-10 w-full" />
                </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>Apple iPhone 13 Pro Max (Alpine Green, 1 TB) iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience. </p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">345 Ratings & 13 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹59,990</span> <s className="mx-2">₹90,000 </s> <b className="text-green-800">21% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default Phone