import Navigation from "../../utils/Navigation"
import product5 from "../../Assets/images/product5.png"
function Joystick() {
    return (
        <div>
            <Navigation />
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-24 pb-14 px-5 w-fit">
                    <img src={product5} alt="" className="md:ml-10 w-full" />
                </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>Sony Playstation3 DualShock Wireless Controller Professional PS3 Wireless Gamepad Suitable for PlayStation 3/ PS3 Slim / PS3 Super Slim/PS3 Fat ( Only Ps3 Controller , charging cable not included ) Joystick  (Black, For PS3) </p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">345 Ratings & 13 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹1,990</span> <s className="mx-2">₹4,000 </s> <b className="text-green-800">21% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default Joystick