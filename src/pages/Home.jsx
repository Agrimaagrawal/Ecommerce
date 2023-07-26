
import { useContext } from "react"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import { Context } from "../context/productcontext";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Allproducts from "../components/Allproducts";





const Home = () => {
  const {isLoading}=useContext(Context)
  
  return (
    <div>
      <Navbar/>
     {isLoading?<Loader/>:<div>
      <Hero/>
      <Menu/>
      <Allproducts/>
      <Footer/>
      
      </div>
     
  }
     
    </div>
  )
}

export default Home
