import {tvData}  from '../data/tv'
import "./Mobiles.css"
import Navbar from "../Components/Navbar"
function Tvs(){
    return(

        <>
        <Navbar/>
        {
            tvData.map((item)=>{
                return(
                    <div className='prosec' key={item.id}>
                        <div className='pro-name'>{item.brand}</div>
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
export default Tvs