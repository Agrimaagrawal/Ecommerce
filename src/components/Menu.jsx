import Jwellery from '../assets/Jwelleryclothing.jpg'
import Mensclothing from '../assets/Mensclothing.jpg';
import womenClothing from '../assets/Womensclothing.jpg';
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div >
      <h1 className='text-4xl text-center p-10'>Shop by Category</h1>
      <div className='w-full h-auto flex justify-center gap-4 flex-wrap'>
        <div className='w-[400px] p-5 text-2xl md:text-5xl h-[500px] text-center shadow-2xl flex flex-col justify-center items-center'>
        <Link to={`/category/men's%20clothing`}><div ><img src={Mensclothing} className="h-[400px]  "/></div>
            <div className='p-2 font-bold'>Mens</div></Link>
        </div>
        <div className='w-[400px] p-5 text-2xl md:text-5xl h-[500px] text-center shadow-2xl flex flex-col justify-center items-center'>
        <Link to={`/category/women's clothing`}><div><img src={  womenClothing}  className="h-[400px] "/></div>
            <div className='p-2 font-bold' >Women</div></Link>
        </div>
        <div className='w-[400px] p-5 text-2xl md:text-5xl h-[500px] text-center shadow-2xl flex flex-col justify-center items-center'>
        <Link to={'/category/jewelery'}> <div><img src={ Jwellery} className="h-[400px] "/></div>
            <div className='p-2 font-bold'>Jwellery</div></Link>
        </div>
       
      </div>
    </div>
  )
}

export default Menu
