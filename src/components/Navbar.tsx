import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <div className='flex space-x-4'>
        <Link to="/" className='hover:underline text-2xl'>Home | </Link> 
        <Link to='/about' className="hover:underline text-2xl"> About |</Link>
        <Link to="/contact" className='hover:underline text-2xl'> Contact</Link>
        

    </div>
  )
}

export default Navbar   