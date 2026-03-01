import {computerData}  from '../data/computers'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
function Computers(){
    return(

        <>
        <Navbar/>
        {
            computerData.map((item)=>{
                return(
                     <div className='prosec' key={item.id}>
                        <div className='pro-name'>{item.company}</div>
                        <Link to={`/computers/${item.id}`}><div className='proimg'>
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
export default Computers