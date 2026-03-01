import {kitchenData}  from '../data/kitchen'
import "./Mobiles.css"
import Navbar from "../Components/Navbar"
import Productbar from "../Components/ProdBar"
function Kitchen(){
    return(

        <>
        <Navbar/>
        {
            kitchenData.map((item)=>{
                return(
                    <div className='prosec' key={item.id}>
                        <div className='pro-name'>{item.type}</div>
                        <div className='proimg'>
                        <img src={item.image} alt=''/>
                        </div>
                        <div className='price'>price:{item.price}</div>
                        <div className='description'>{item.description}</div>
                    </div>
                )
            }
        )}
        </>
    )
}
export default Kitchen