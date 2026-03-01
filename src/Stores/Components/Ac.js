
import {acData}  from '../data/ac'
import Navbar from "../Components/Navbar"
import Productbar from "../Components/ProdBar"
import { Link } from 'react-router-dom'

function Ac(){
    return(

        <>
        <div className='product'>
            <Navbar/>
            
        {
            acData.map((item)=>{
                return(
                     <div className='prosec' key={item.id}>
                        <Link to={`/ac/${item.id}`}><div className='pro-name'>{item.product}</div>
                        <div className='proimg'>
                        <img src={item.image} alt=''/>
                        </div></Link>
                        <div className='price'>price:{item.price}</div>
                        <div className='description'>{item.description}</div>
                    </div>
                )
            }
        )}
        </div>
        </>
    )
}
export default Ac