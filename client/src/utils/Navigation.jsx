import logo from "../Assets/images/logo1.png"
import '../App.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Navigation() {
    const [open, isOpen] = useState(false)
    const slide = () => {
        isOpen(!open)
    }
    return (
        // Navigation Section
        <nav className="p-5 w-full fixed top-0 z-10" style={{ backgroundColor: "#A5F1E9" }}>
            {/* Navigation Top */}
            <div className="flex justify-between items-center">
                <i onClick={slide} class="fa-solid fa-bars text-xl md:hidden cursor-pointer"></i>
                <img src={logo} alt="" className="w-36" />
                <div className="hidden md:flex justify-center nav-items">
                    <ul className="flex gap-16 mt-5">
                        <Link to={"/home"}><a href="#"><p>Home</p></a></Link>
                        <Link to={"/store"}><a href="#"><p>Store</p></a></Link>
                        <Link to={"/contact"}><a href="#"><p>Contact</p></a></Link>
                    </ul>
                </div>
                <div className="flex items-center gap-5 cursor-pointer ml-5">
                    {/* Profile Section */}
                    <i class="fa-solid fa-user text-xl"></i>
                    {/* Cart Section */}
                    <Link to={"/cart"}><i class="fa-solid fa-cart-shopping text-xl"></i></Link>
                    {/* Login Section */}
                    <Link to={"/"}><button className="hidden md:block font-bold login-btn text-xl p-1">Logout</button></Link>
                </div>
            </div>

            <nav className="z-20 p-3 nav-items transition-all duration-1000" style={{ width: "50%", height: "100vh", backgroundColor: "#A5F1E9", position: "fixed", left: open ? "0%" : "-50%", top: "100px" }}>
                <i onClick={slide} class="text-xl m-2 fa-solid fa-xmark cursor-pointer"></i>
                <div className="flex flex-col items-center justify-center gap-80">
                    <ul className="flex mt-12 flex-col gap-4 items-center">
                        <Link to={"/home"}><a href="#"><p>Home</p></a></Link>
                        <Link to={"/store"}><a href="#"><p>Store</p></a></Link>
                        <Link to={"/contact"}><a href="#"><p>Contact</p></a></Link>
                    </ul>
                    <div className="flex flex-col items-center justify-center mt-5 z-30">
                        <div className="mt-14">
                            <div className="flex items-center justify-center gap-1">
                                <i class="fa-solid fa-user text-xl"></i>
                                <Link to={"/"}><button className="font-bold login-btn text-l p-1">LogOut</button></Link>
                            </div>
                            <Link to={"/signup"}><p className="text-sm text-center text-blue-900 underline cursor-pointer">didn't have an account?</p></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    )
}
export default Navigation