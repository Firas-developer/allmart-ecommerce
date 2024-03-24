import Navigation from "../../utils/Navigation"
import product1 from "../../Assets/images/product1.png"
function Laptop() {
    return (
        <div>
            <Navigation />
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-14 pb-14 px-5 w-fit">
                    <img src={product1} alt="" />
                </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>SAMSUNG Galaxy Book 2 Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)</p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">2,345 Ratings & 213 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹44,990</span> <s className="mx-2">₹82,000 </s> <b className="text-green-800">45% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default Laptop