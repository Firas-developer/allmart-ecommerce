import Navigation from "../../utils/Navigation"
import product9 from "../../Assets/images/product9.png"
function Speaker() {
    return (
        <div>
            <Navigation />
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-24 pb-14 px-5 w-fit">
                    <img src={product9} alt="" className="md:ml-20 md:w-96 w-80" />
                </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>Boat Perfect High bass Headphone with Deep bass & great sound quality Bluetooth Headset  (Black, On the Ear) Perfect High bass Headphone with Deep bass & great sound quality 2.4026 GHz-2.480 GHz Power On/Off, Volume, MP3/FMOn/Off, Play/Pause, Prev./Next, Volume-Up/Down</p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">345 Ratings & 13 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹990</span> <s className="mx-2">₹2,000 </s> <b className="text-green-800">21% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default Speaker