import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import emptycart from '../assets/emptycart.png'


const Emptycart = () => {
  return (
    <div>
        <Navbar/>
      <div className="flex flex-col items-center justify-center mt-6 gap-7">
        <img src={emptycart} className="h-[200px]"></img>
        <h1 className="text-7xl text-center font-semibold m-auto">Cart is Empty</h1>
        <Link to='/' className="bg-red-400 p-6 text-lg font-bold rounded-lg mt-5">Shop Now</Link>
      </div>
    </div>
  )
}

export default Emptycart
