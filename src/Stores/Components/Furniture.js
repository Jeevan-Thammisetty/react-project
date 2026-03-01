import {furnitureData}  from '../data/furniture'
import Navbar from './Navbar'
function Furniture(){
    return(

        <>
        <Navbar/>
        {
            furnitureData.map((item)=>{
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
export default Furniture