import {booksData}  from '../data/books'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
function Books(){
    return(

        <>
        <Navbar/>
        {
            booksData.map((item)=>{
                return(
                     <div className='prosec' key={item.id}>
                        <div className='pro-name'>{item.title}</div>
                        <Link to={`/books/${item.id}`}><div className='proimg'>
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
export default Books