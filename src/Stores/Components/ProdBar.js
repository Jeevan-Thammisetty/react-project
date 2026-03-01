import "./Productbar.css"
import { Link } from "react-router-dom"
function Productbar(){
    return(
        <>
        <div className="product-types">
            <Link to="/ac"><h2>AC</h2></Link>
            <Link to="/books"><h2>Books</h2></Link>
            <Link to="/computers"><h2>Computers</h2></Link>
            <Link to="/fridges"><h2>Fridges</h2></Link>
            <Link to="/Kitchen"><h2>Kitchen</h2></Link>
            <Link to="/men"><h2>Menwear</h2></Link>
            <Link to="/womens"><h2> Women wear</h2></Link>
            <Link to="/mobiles"><h2>Mobiles</h2></Link>
            <Link to="/speakers"><h2>Speakers</h2></Link>
            <Link to="/tvs"><h2>TV's</h2></Link>
            <Link to="/watches"><h2>Watches</h2></Link>
            <Link to="/furniture"><h2> Furniture</h2></Link>
            

        </div>
        </>
    )
}
export default Productbar