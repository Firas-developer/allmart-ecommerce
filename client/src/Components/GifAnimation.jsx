import gif1 from "../Assets/images/gif1.gif"
import gif2 from "../Assets/images/gif2.gif"
import gif3 from "../Assets/images/gif3.gif"
import gif4 from "../Assets/images/gif4.gif"
function GifAnimation(){
    return(
        <div className="mt-14 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-9">
            <img src={gif1} alt="" className="rounded-xl"/>
            <img src={gif2} alt="" className="rounded-xl"/>
            <img src={gif3} alt="" className="rounded-xl"/>
            <img src={gif4} alt="" className="rounded-xl"/>
        </div>
    )
}
export default GifAnimation