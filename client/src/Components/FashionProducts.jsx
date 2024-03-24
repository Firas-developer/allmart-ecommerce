import { Link } from "react-router-dom"
import { FashionItems } from "../utils/Fashion"
function FashionProducts({handleClick}) {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">Fashion Collection</h1>
            <div className="grid grid-cols-2 grid-rows-5 gap-2 md:grid-cols-5 md:grid-rows-2 md:gap-5">
                {
                    FashionItems.map(function (item) {
                        return (
                            <div className="flex flex-col gap-2 bg-white w-fit p-5 mt-5">
                                <img src={item.img} alt="" style={{ width: "100%", height: "50%" }} />
                                <Link to={`/${item.name}`}><b className="">{item.brand}</b></Link>
                                <Link to={`/${item.name}`}><p className="text-xs">{item.title}</p></Link>
                                <p>{item.rating}</p>
                                <p> <s>{item.originalPrice}</s> {item.price} </p>
                                <div className="flex gap-2">
                                   <Link to={'/checkout'}> <button style={{ backgroundColor: "#00786f" }} className="text-white p-1 text-xs rounded-l" >Buy Now</button></Link>
                                    <Link to={'/cart'}><button style={{ backgroundColor: "#00786f" }} className="text-white p-1 text-xs rounded-l" onClick={(event)=>handleClick(item,event)}>Add to Cart</button></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default FashionProducts