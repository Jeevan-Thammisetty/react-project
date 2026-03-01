import {menData}  from '../data/men'
import Navbar from './Navbar'
function Menwear(){
    return(

        <>
        <Navbar/>
        {
            menData.map((item)=>{
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
export default Menwear;