import React from 'react'
import{ Link } from 'react-router-dom'
import {House,ChartPie,History} from 'lucide-react'

const NavBar = () => {
  return (
    <>
    <nav  className=' p-6 shadow-lg'>
        <div className='flex justify-around w-1/2'>
        <div>
            <House/>
            <Link to='/' className='ml-2'>Dashboard</Link>
        </div>
        <div className='flex'>
            <ChartPie/>
            <Link to='/history' className='ml-2'>Analytics</Link>
        </div>
        <div className='flex'>
            <History/>
            <Link to='/analytics' className='ml-2'>History</Link>
        </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar