import "./Navbar.css"
import { useCart } from "./Cartitem"; 
import Productbar from "./ProdBar";
import { Link } from "react-router-dom";

function Navbar() {
  const { getCartCount } = useCart();

  return (
    <>
    <div className="nav">
       
      <div className="logo">
        <h1>E-comm</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="search...." />
      </div>
      <div className="user">
        <Link to="/login"><div className="user-det">
          Signin/Signup
        </div></Link>
        <div className="cart">
          Cart <span>{getCartCount()}</span>
        </div>
      </div>
    </div>
    <Productbar/>
    </>
  )
}
export default Navbar;