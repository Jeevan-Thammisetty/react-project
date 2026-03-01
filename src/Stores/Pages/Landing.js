import { BrowserRouter, Routes, Route } from "react-router-dom"
import Mobiles from "../Components/Mobiles"
import Navbar from "../Components/Navbar"
import Books from "../Components/Books"
import Ac from "../Components/Ac"
import Computers from "../Components/Computers"
import Fridges from "../Components/Fridges"
import Kitchen from "../Components/Kitchen"
import Menwear from "../Components/Menwear"
import Speakers from "../Components/Speakers"
import Tvs from "../Components/Tvs"
import Watches from "../Components/Watches"
import Women from "../Components/Women"
import Furniture from "../Components/Furniture"
import MobileSingle from "../Components/MobileSingle"
import ACsingle from "../Components/ACsingle"
import Booksingle from "../Components/Booksingle"
import { CartProvider } from "../Components/Cartitem"
import Computersingle from "../Components/ComputerSingle"
import Login from "../Components/Login"
import Signup from "../Components/Singin"
import Fridgesingle from "../Components/Fridgesingle"



function Landing(){
    return(
        <>
        <CartProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}/>
            <Route path="/mobiles" element={<Mobiles/>}/>
            <Route path="/books" element={<Books/>}/>
            <Route path="/computers" element={<Computers/>}/>
            <Route path="/ac" element={<Ac/>}/>
            <Route path="/fridges" element={<Fridges/>}/>
            <Route path="/kitchen" element={<Kitchen/>}/>
            <Route path="/men" element={<Menwear/>}/>
            <Route path="/speakers" element={<Speakers/>}/>
            <Route path="/tvs" element={<Tvs/>}/>
            <Route path="/watches" element={<Watches/>}/>
             <Route path="/womens" element={<Women/>}/>
             <Route path="/furniture" element={<Furniture/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<Signup/>}/>

             <Route path="/mobiles/:id" element={<MobileSingle/>}/>
             <Route path="/ac/:id" element={<ACsingle/>}/>
             <Route path="/books/:id" element={<Booksingle/>}/>
             <Route path="/computers/:id" element={<Computersingle/>}/>
             <Route path="/fridge/:id" element={<Fridgesingle/>}/>

             <Route path="/cart" element={<CartProvider/>}/>
        </Routes>
        </BrowserRouter>
        </CartProvider>
         </>
    )
}
export default Landing