
import { useContext } from "react"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import { Context } from "../context/productcontext";
import Loader from "../components/Loader";





const Home = () => {
  const {isLoading}=useContext(Context)
  
  return (
    <div>
     {isLoading?<Loader/>:<div>
      <Hero/>
      <Menu/>
      </div>
     
  }
     
    </div>
  )
}

export default Home
