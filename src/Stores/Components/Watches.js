import {watchData}  from '../data/watch'
import "./Mobiles.css"
import Navbar from "../Components/Navbar"
function Watches(){
    return(

        <>
        <Navbar/>
        {
            watchData.map((item)=>{
                return(
                    <div className='prosec' key={item.id}>
                        <div className='pro-name'>{item.model}</div>
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
export default Watches