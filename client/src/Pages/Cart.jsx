import { useState } from "react"
import Navigation from "../utils/Navigation"
import { Link } from "react-router-dom"
function Cart({ cart, removeCart, setRemoveCart, noCart, setNoCart }) {
    var [itemCount, setItemCount] = useState(1)
    function increaseCount() {
        setItemCount(itemCount++)
    }
    function decreaseCount() {
        setItemCount(itemCount--)
    }

    function handleremoveCart(event) {
        event.currentTarget.className = "hidden"
        var NumberOfCart = cart.length--
        console.log(NumberOfCart);
        if (NumberOfCart === 1) {
            setRemoveCart(!removeCart)
            setNoCart(!noCart)
        }
    }
    return (
        <div className="flex flex-col justify-between">
            <Navigation />
            <div className="mt-48 ml-10 ">
                {
                    cart.map(function (Products) {
                        return (
                            <div className="flex justify-center items-center" onClick={(event) => handleremoveCart(event)}>
                                <div className="flex justify-evenly gap-5 p-5 px-10 items-center shadow-lg shadow-black mb-5 text-sm md:text-xl" style={{ width: "90%" }}>
                                    <img src={Products.img} alt="" style={{ width: "30%" }} />
                                    <div className="flex flex-col gap-5">
                                        <p className="font-bold">{Products.title}</p>
                                        <div className="flex items-center gap-3">
                                            <s>{Products.originalPrice}</s>
                                            <p className="font-bold text-xl">{Products.price}</p>
                                            <p className="text-sm text-green-900">{Products.offer} <span className="text-sm">% off</span></p>
                                        </div>
                                        <div className="flex gap-5">
                                            <div className="flex gap-4">
                                                <button onClick={decreaseCount} className="cursor-pointer flex items-center text-l font-bold px-3 bg-green-900 text-white rounded-full">-</button>
                                                <p className="font-bold flex items-center border border-black px-5">{itemCount}</p>
                                                <button onClick={increaseCount} className="cursor-pointer flex items-center text-l font-bold px-3 bg-green-900 text-white rounded-full">+</button>
                                            </div>
                                            <button className="flex flex-start bg-green-900 rounded-xl text-white w-fit p-1">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
                <div className="flex flex-col justify-center items-center">
                    <div style={{ display: noCart ? "block" : "none" }}>
                        <i class="fa-solid fa-cart-shopping text-3xl ml-16 mb-3"></i>
                        <h1 className="text-green-900 font-semibold">No Cart Items is added</h1>
                    </div>
                </div>
                <div className="m-10 flex justify-center items-center" style={{ display: removeCart ? "none" : "block" }}>
                    <Link to={'/checkout'}><button className="text-white bg-green-900 p-2 md:mx-9 md:w-96 w-72">Place Order</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Cart