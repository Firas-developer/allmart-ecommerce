import Navigation from "../utils/Navigation";
import { useState } from "react";
import UPI from '../Assets/images/UPI.gif'
import Wallets from '../Assets/images/Wallets.gif'
import { Link } from "react-router-dom";
function Checkout({ cart, removeCart, setRemoveCart, noCart, setNoCart }) {

    var [itemCount, setItemCount] = useState(1)
    function increaseCount() {
        setItemCount(itemCount++)
    }
    function decreaseCount() {
        setItemCount(itemCount--)
    }
    const [removeorder, setRemoveOrder] = useState(true)
    const [removePayment, setRemovePayment] = useState(true)
    function handleremoveCart(event) {
        event.currentTarget.className = "hidden"
        var NumberOfCart = cart.length--
        console.log(NumberOfCart);
        if (NumberOfCart === 1) {
            setRemoveCart(!removeCart)
            setNoCart(!noCart)
            setRemoveOrder(!removeorder)
            setRemovePayment(!removePayment)
        }
    }
    const handlePayment = ()=>{
        setRemovePayment(!removePayment)
    }
    return (
        <div>
            <Navigation />
            <div className="mt-44 md:mx-40 mx-5">
                <h1 className="font-bold md:text-xl text-sm text-white bg-green-900 p-2" style={{ width: "90%", display: removeorder ? "block" : "none" }}>ORDER SUMMARY</h1>
                {
                    cart.map(function (Products) {
                        return (
                            <div className="flex justify-start mt-5" onClick={(event) => handleremoveCart(event)} style={{display: removePayment? "block":"none"}}>
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
                <div className="m-10 flex justify-center items-center" style={{ display: removePayment ? "block" : "none" }}>
                    <button className="text-white bg-green-900 p-2 md:w-96 w-72" onClick={handlePayment}>Continue</button>
                </div>
                <h1 className="font-bold my-5 text-sm md:text-xl text-white bg-green-900 p-2" style={{ width: "90%", display: removePayment ? "none" : "block" }}>PAYMENT OPTIONS</h1>
                <div className="m-5 flex flex-col" style={{display:removePayment?"none":"block"}}>
                    <div className="flex gap-3 items-center my-5">
                        <input name="payment" type="radio" />
                        <img src={UPI} alt="" className="w-10"/>
                        <p className="font-bold"> UPI</p>
                    </div>
                    <hr />
                    <div className="flex gap-3 items-center my-5">
                        <input name="payment" type="radio" />
                        <img src={Wallets} alt="" className="w-10"/>
                        <p className="font-bold"> Wallets</p>
                    </div>
                    <hr />
                    <div className="flex gap-3 items-center my-5">
                        <input name="payment" type="radio" />
                        <div className="flex flex-col gap-1">
                            <p className="font-bold">Credit / Debit / ATM Card</p>
                            <p className="text-gray-600">Add and Secure Cards as per RBI</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex gap-3 items-center my-5">
                        <input name="payment" type="radio" />
                        <div className="flex flex-col gap-1">
                            <p className="font-bold">Net Banking</p>
                            <p className="text-gray-600">Secure Bank Transactions as per RBI</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex gap-3 items-center my-5">
                        <input name="payment" type="radio" />
                        <p className="font-bold"> Cash on Delivery</p>
                    </div>
                </div>
                <Link to={'/order'}><button className="bg-green-900 text-white p-1 m-3 " style={{display: removePayment ? "none" : "block"}}>Confirm Order</button></Link>
            </div>
        </div>
    )
}
export default Checkout