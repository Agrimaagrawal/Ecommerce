import{BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import AppContext from './context/productcontext'
import {CartProvider} from './context/CartContext'
import Sucess from './components/Sucess';
import Cancel from './components/Cancel';


function App() {
 

  return (
    <>
    <AppContext>
      <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/category/:name' element={<Category/>}></Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/sucess' element={<Sucess/>}/>
          <Route path='/cancel' element={<Cancel/>}/>
         
      </Routes>
    </Router>
    </CartProvider>
    </AppContext>
   
      
    </>
  )
}

export default App
