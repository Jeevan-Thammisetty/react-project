import {fridgeData}  from '../data/fridge'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
function Fridges(){
    return(

        <>
        <Navbar/>
        {
            fridgeData.map((item)=>{
                return(
                     <div className='prosec' key={item.id}>
                        <div className='pro-name'>{item.brand}</div>
                        <Link to={`/fridge/${item.id}`}><div className='proimg'>
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
export default Fridges;