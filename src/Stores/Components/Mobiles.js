import {mobileData}  from '../data/mobiles'
import "./Mobiles.css"
import Navbar from "../Components/Navbar"
import { Link } from 'react-router-dom'
function Mobiles(){
    return(

        <>
        <Navbar/>
        {
            mobileData.map((item)=>{
                return(
                    <div className='prosec' key={item.id}>
                        <div className='pro-name'>{item.company}</div>
                        <Link to={`/mobiles/${item.id}`}><div className='proimg'>
                        <img src={item.image} alt=''/>
                        </div></Link>
                        <div className='price'>price:{item.price}</div>
                        <div className='description'>{item.description}</div>
                    </div>
                )
            }
        )}
        </>
    )
}
export default Mobiles