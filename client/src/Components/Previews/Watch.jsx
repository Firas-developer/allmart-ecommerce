import Navigation from "../../utils/Navigation"
import product4 from "../../Assets/images/product4.png"
function Watch() {
    return (
        <div>
            <Navigation />
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-24 pb-10 px-3 w-fit">
                    <img src={product4} alt="" style={{ height: "80%" }} />
                </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>Apple Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking  (White Strap, 44mm)  Get help when you need it with Crash Detection, Fall Detection and Emergency SOS. Get deep insights into your health, including notifications if you have an irregular rhythm or an unusually high or low heart rate. </p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">45,345 Ratings & 1213 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹29,990</span> <s className="mx-2">₹32,000 </s> <b className="text-green-800">9% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default Watch