import Carousel from "../Components/Carousel"
import Navigation from "../utils/Navigation"
import Service from "../Components/Service"
import Footer from "../utils/Footer"
function Home({handleClick,login,setLogin,size,setCart}){
    return(
        <div>
            <Navigation login={login} setLogin={setLogin} size={size} setCart={setCart}/>
            <Carousel/>
            <Service handleClick={handleClick}/>
            <Footer />
        </div>
    )
}
export default Home