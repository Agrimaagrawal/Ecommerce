import{BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import AppContext from './context/productcontext'
import {CartProvider} from './context/CartContext'


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
         
      </Routes>
    </Router>
    </CartProvider>
    </AppContext>
   
      
    </>
  )
}

export default App
