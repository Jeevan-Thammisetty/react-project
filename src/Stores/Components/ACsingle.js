import { acData } from "../data/ac"
import { Link, useParams } from "react-router-dom"
import Navbar from "./Navbar"
import "./MobileSingle.css"
import { useCart } from "./Cartitem"

function ACsingle(){
    const {id} = useParams()
    const {addToCart} = useCart()
    const product = acData.find((item) => item.id === id)
    
    return(
        <>
        <Navbar/>
        <div className="sec">
            <div className="sel-img">
                <img src={product.image} alt={product.model} />
            </div>
            <div className="details">
                <div className="sel-mod">{product.model}</div>
                <div className="sel-price">{product.price}</div>
                <div className="sel-des">{product.description}</div>
               <button className="cart-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
        </>
    )
}
export default ACsingle;