import{BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';


function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/details' element={<Category/>}></Route>
          <Route path='/cart' element={<Cart/>}/>
         
      </Routes>
    </Router>
      
    </>
  )
}

export default App
