import { mobileData } from "../data/mobiles"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { useCart } from "./Cartitem"
import "./MobileSingle.css"
function MobileSingle(){
    const {id}=useParams()
     const {addToCart} = useCart()
    const product=mobileData.find((item)=>item.id===id)
    console.log(id)
    return(
        <>
        <Navbar/>
        <div className="sec">
            <div className="sel-img">
                <img src={product.image}></img>
            </div>
        <div className="details">
            <div className="sel-price">{product.price}</div>
            <div className="sel-mod">{product.model}</div>
            <div className="sel-des">{product.description}</div>
            <button className="cart-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
        </div>
        </div>
        </>
    )
}
export default MobileSingle