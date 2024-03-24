import { Link } from "react-router-dom"
import { StoreProducts } from "../utils/StoreProducts"
import Navigation from "../utils/Navigation"
import Footer from "../utils/Footer"
function Store({ handleClick,size }) {
    return (
        <div>
            <Navigation size={size}/>
            <div className="mt-20">
                {
                    StoreProducts.map(function (items) {
                        return (
                            <div className="md:flex gap-10 justify-around items-center p-3 mt-10 bg-green-100">
                                <div className="flex items-center justify-center">
                                    <Link to={`/${items.name}`}><img src={items.img} alt="" className="w-fit" /></Link>
                                </div>
                                <div className="md:w-96 flex flex-col justify-center">
                                    <Link to={`/${items.name}`}><p className="font-semibold mb-3">{items.title}</p></Link>
                                    <div className="flex gap-2">
                                        <p>{items.rating}</p>
                                        <p>{items.reviews} <span className="text-sm">Ratings and Reviews</span></p>
                                    </div>
                                    <p className="text-3xl">{items.price}</p>
                                    <p> <s>{items.originalPrice}</s> <span className="text-green-800">{items.offer}% off</span></p>
                                    <div className="flex flex-col gap-2 mr-3">
                                        <button onClick={(event) => handleClick(items,event)} className="text-white mt-5 p-2 text-sm md:p-2 md:text-l font-bold rounded-xl w-full bg-green-900"> <i class="fa-solid fa-cart-shopping"></i> Add to Cart </button>
                                        <Link to={'/checkout'}><button className="text-white w-full mt-5 p-2 px-5 text-sm md:p-2 md:text-l font-bold rounded-xl bg-green-900"> <i class="fa-solid fa-bolt-lightning"></i> Buy Now</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}
export default Store