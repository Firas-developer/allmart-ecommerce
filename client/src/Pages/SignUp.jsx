import logo from "../Assets/images/logo1.png"
import "../App.css"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { database } from "../firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import axios from "axios";
function SignUp() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(database, email, password)
            .then(() => {
                e.target.password.value = "";
                e.target.email.value = "";
                toast.success('Registered successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                axios.post("https://allmart-ecommerce-server.vercel.app//sendmail", { email: email })
            }).catch(err => {
                alert(err.code)
            })
    }
    return (
        <div className="flex flex-col items-center gap-16 mt-16" style={{ width: "100%" }}>
            <img src={logo} alt="" className="w-40" />
            <div className="p-7 md:block hidden" style={{ border: "solid 1px gray", width: "33%" }}>
                <h1 className="text-3xl font-bold" style={{ color: "#00786f" }}>Sign Up</h1>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <p className="mt-2 font-semibold">Enter email address</p>
                    <input name="email" type="email" placeholder="Email address" className="p-1 outline-none border border-black rounded-xl" style={{ width: "100%", fontFamily: "Roboto" }} />
                    <p className="mt-2 font-semibold">Enter Password</p>
                    <input name="password" type="password" placeholder="Password" className="p-1 outline-none border border-black rounded-xl" style={{ width: "100%", fontFamily: "Roboto" }} />
                    <button className="rounded-xl mt-3 p-1 text-white w-full" style={{ backgroundColor: "#00786f" }}>Submit</button>
                </form>
                <p className="mt-5" style={{ fontSize: "12px" }}>By continuing, you agree to All Mart's <span style={{ color: "#00786f" }}>Conditions of Use</span> and <span style={{ color: "#00786f" }}>Privacy Notice</span>.</p>
            </div>
            <div className="p-7 md:hidden" style={{ border: "solid 1px gray", width: "70%" }}>
                <h1 className="text-3xl font-bold" style={{ color: "#00786f" }}>Sign Up</h1>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <p className="mt-2 font-semibold">Enter email address</p>
                    <input name="email" type="email" placeholder="Email address" className="p-1 text-sm outline-none border border-black rounded-xl" style={{ width: "100%", fontFamily: "Roboto" }} />
                    <p className="mt-2 font-semibold">Enter Password</p>
                    <input name="password" type="password" placeholder="Password" className="p-1 text-sm outline-none border border-black rounded-xl" style={{ width: "100%", fontFamily: "Roboto" }} />
                    <button className="rounded-xl mt-3 p-1 text-white w-full" style={{ backgroundColor: "#00786f" }}>Submit</button>
                </form>
                <p className="mt-5" style={{ fontSize: "12px" }}>By continuing, you agree to All Mart's <span style={{ color: "#00786f" }}>Conditions of Use</span> and <span style={{ color: "#00786f" }}>Privacy Notice</span>.</p>
            </div>
            <div className="text-center">
                <p className="text-sm" style={{ color: "#00786f" }}>Already a User?</p>
                <Link to={"/"}><button className="rounded-xl mt-3 p-1 text-white w-full mx-2" style={{ backgroundColor: "#00786f", color: "#A5F1E9" }}>Login</button></Link>
            </div>
            <footer className="border-t border-gray-400 p-5 w-full flex flex-col gap-3 items-center justify-center">
                <div className="flex gap-5" style={{ fontSize: "12px", color: "#00786f" }}>
                    <p>Conditions of Use </p>
                    <p>Privacy Notice </p>
                    <p>Help</p>
                </div>
                <div style={{ fontSize: "12px", color: "#00786f" }}>
                    <p>&copy; All Mart, Inc or its affiliates 2024</p>
                </div>
            </footer>
            <ToastContainer />
        </div>
    )
}
export default SignUp