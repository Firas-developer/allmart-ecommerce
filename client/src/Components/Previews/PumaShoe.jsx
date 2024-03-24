import Navigation from "../../utils/Navigation"
import fashion10 from "../../Assets/images/fashion10.png"
function PumaShoe() {
    return (
        <div>
            <Navigation />
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-24 pb-14 px-5 w-fit">
                    <img src={fashion10} alt="" className="md:ml-20 md:w-96 w-80" />
                </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>Puma Men Shoe Better Cotton:Our Cotton Products Support Sustainable Cotton Farming. This Is Part Of Our Ambition To End Plastic Waste . Better Cotton:Our Cotton Products Support Sustainable Cotton Farming. This Is Part Of Our Ambition To End Plastic Waste . Fit:Regular . Fit:Regular . Logo Execution & Placement:Bos Print Along The Sleeve . Logo Execution & Placement:Badge Of Sport On Chest .</p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">345 Ratings & 13 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹4,999</span> <s className="mx-2">₹7,000 </s> <b className="text-green-800">10% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default PumaShoe