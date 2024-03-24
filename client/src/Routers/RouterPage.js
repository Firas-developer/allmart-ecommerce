import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Contact from '../Pages/Contact'
import Laptop from '../Components/Previews/Laptop'
import Camera from '../Components/Previews/Camera'
import Tv from '../Components/Previews/Tv'
import Watch from '../Components/Previews/Watch'
import Joystick from '../Components/Previews/Joystick'
import Phone from '../Components/Previews/Phone'
import Headphone from '../Components/Previews/Headphone'
import Airpods from '../Components/Previews/Airpods'
import Speaker from '../Components/Previews/Speaker'
import Toaster from '../Components/Previews/Toaster'
import AdidasTshirt from '../Components/Previews/AdidasTshirt'
import AdidasShoe from '../Components/Previews/AdidasShoe'
import NikeHoodie from '../Components/Previews/NikeHoodie'
import NikeShoe from '../Components/Previews/NikeShoe'
import AdidasTrack from '../Components/Previews/AdidasTrack'
import NikeTrack from '../Components/Previews/NikeTrack'
import ReebookShoe from '../Components/Previews/ReebookShoe'
import ReebookTshirt from '../Components/Previews/ReebookTshirt'
import PumaTrack from '../Components/Previews/PumaTrack'
import PumaShoe from '../Components/Previews/PumaShoe'
import Store from '../Pages/Store'
import Cart from '../Pages/Cart'
import { useState } from 'react'
import Checkout from '../Pages/Checkout'
import Order from '../Pages/Order'
function RouterPage() {
    const [removeCart, setRemoveCart] = useState(true)
    const [login, setLogin] = useState(false);
    const [cart, setCart] = useState([]);
    const[cartadded,setCartAdded] = useState(false)
    const [noCart,setNoCart]  = useState(true)
    const handleClick = (item,event) => {
        event.currentTarget.disabled = true;
        event.currentTarget.className = "text-black mt-5 p-2 text-sm md:p-2 md:text-l font-bold rounded-xl w-full bg-green-300";
        setCart([...cart,{id:item.id,img:item.img,title:item.title,price:item.price,originalPrice:item.originalPrice,offer:item.offer}])
        console.log(cart);
        if(cart.length>0){
            setRemoveCart(!removeCart)
            if(cart.length===1){
                setNoCart(!noCart)
            }
        }
    }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<App handleClick={handleClick} login={login} setLogin={setLogin} size={cart.length} setCart={setCart}/>}></Route>
                    <Route path='/store' element={<Store handleClick={handleClick} cartadded={cartadded} setCartAdded={setCartAdded}/>}></Route>
                    <Route path='/cart' element={<Cart noCart={noCart} setNoCart={setNoCart} cart={cart} setCart={setCart} removeCart={removeCart} setRemoveCart={setRemoveCart}/>}></Route>
                    <Route path='/' element={<Login login={login} setLogin={setLogin}/>}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='/order' element={<Order/>}></Route>
                    <Route path='/checkout' element={<Checkout noCart={noCart} setNoCart={setNoCart} cart={cart} setCart={setCart} removeCart={removeCart} setRemoveCart={setRemoveCart}/>}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/laptop' element={<Laptop handleClick={handleClick} />}></Route>
                    <Route path='/camera' element={<Camera handleClick={handleClick} />}></Route>
                    <Route path='/tv' element={<Tv handleClick={handleClick} />}></Route>
                    <Route path='/watch' element={<Watch handleClick={handleClick} />}></Route>
                    <Route path='/joystick' element={<Joystick handleClick={handleClick} />}></Route>
                    <Route path='/phone' element={<Phone handleClick={handleClick} />}></Route>
                    <Route path='/headphone' element={<Headphone handleClick={handleClick} />}></Route>
                    <Route path='/airpods' element={<Airpods handleClick={handleClick} />}></Route>
                    <Route path='/speaker' element={<Speaker handleClick={handleClick} />}></Route>
                    <Route path='/toaster' element={<Toaster handleClick={handleClick} />}></Route>
                    <Route path='/adidas-tshirt' element={<AdidasTshirt handleClick={handleClick} />}></Route>
                    <Route path='/adidas-shoe' element={<AdidasShoe handleClick={handleClick} />}></Route>
                    <Route path='/nike-hoodie' element={<NikeHoodie handleClick={handleClick} />}></Route>
                    <Route path='/nike-shoe' element={<NikeShoe handleClick={handleClick} />}></Route>
                    <Route path='/adidas-track' element={<AdidasTrack handleClick={handleClick} />}></Route>
                    <Route path='/nike-track' element={<NikeTrack handleClick={handleClick} />}></Route>
                    <Route path='/reebook-shoe' element={<ReebookShoe handleClick={handleClick} />}></Route>
                    <Route path='/reebook-tshirt' element={<ReebookTshirt handleClick={handleClick} />}></Route>
                    <Route path='/puma-track' element={<PumaTrack handleClick={handleClick} />}></Route>
                    <Route path='/puma-shoe' element={<PumaShoe handleClick={handleClick} />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouterPage