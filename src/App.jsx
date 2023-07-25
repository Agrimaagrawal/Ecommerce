import{BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import AppContext from './context/productcontext'
import {CartProvider} from './context/CartContext'
import Sucess from './components/Loader';
import Cancel from './components/Cancel';
import SignIn from './pages/Signin';
import { AuthProvider } from './context/AuthContext';


function App() {
 

  return (
    <>
    <AppContext>
      <AuthProvider>
      <CartProvider>
        
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/category/:name' element={<Category/>}></Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/sucess' element={<Sucess/>}/>
          <Route path='/cancel' element={<Cancel/>}/>
          <Route path='/signinpage' element={<SignIn/>}/>
         
      </Routes>
    </Router>
    </CartProvider>
    </AuthProvider>
    </AppContext>
   
      
    </>
  )
}

export default App
