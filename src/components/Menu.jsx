import Jwellery from '../assets/Jwelleryclothing.jpg'
import Mensclothing from '../assets/Mensclothing.jpg';
import womenClothing from '../assets/Womensclothing.jpg';
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <div className='w-full h-auto flex justify-between'>
        <div className='w-96 h-80'>
            <div><img src={Mensclothing}/></div>
            <div><Link to='/category'>Mens</Link></div>
        </div>
        <div className='w-96 h-80'>
        <div><img src={  womenClothing}/></div>
            <div><Link to='/category'>Women</Link></div>
        </div>
        <div className='w-96 h-80'>
        <div><img src={ Jwellery}/></div>
            <div><Link to='/category'>Jwellery</Link></div>
        </div>
       
      </div>
    </div>
  )
}

export default Menu
