import{Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-8 bg-black flex justify-end'>
      <Link to='/cart' className='text-white'>Cart</Link>
    </div>
  )
}

export default Navbar;
