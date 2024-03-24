import intel from "../Assets/images/intel.gif"
import dell from "../Assets/images/dell.gif"
import lg from "../Assets/images/lg.gif"
import samsung from "../Assets/images/samsung.gif"
import sony from "../Assets/images/sony.gif"
import nike from "../Assets/images/nike.gif"
import adidas from "../Assets/images/adidas.gif"
import puma from "../Assets/images/puma.gif"
import behance from "../Assets/images/behance.gif"
import reebook from "../Assets/images/reebook.gif"
function Brands(){
    return(
        <div className="mt-10 bg-white p-5">
            <h1 className="font-bold text-2xl">Brands</h1>
            <div className="mt-5 grid grid-cols-4 md:grid-cols-5">
                <img src={intel} alt="" style={{width:"50%"}}/>
                <img src={dell} alt="" style={{width:"50%"}}/>
                <img src={lg} alt="" style={{width:"50%"}}/>
                <img src={samsung} alt="" style={{width:"50%"}}/>
                <img src={sony} alt="" style={{width:"50%"}} className="hidden md:block"/>
            </div>
            <h1 className="font-bold text-2xl mt-10">Fashion</h1>
            <div className="mt-5 grid grid-cols-4 md:grid-cols-5">
                <img src={nike} alt="" style={{width:"50%"}}/>
                <img src={adidas} alt="" style={{width:"50%"}}/>
                <img src={puma} alt="" style={{width:"50%"}}/>
                <img src={behance} alt="" style={{width:"50%"}}/>
                <img src={reebook} alt="" style={{width:"50%"}} className="hidden md:block"/>
            </div>
        </div>
    )
}
export default Brands