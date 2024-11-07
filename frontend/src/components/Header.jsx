import React from 'react'
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div className='flex justify-between items-center px-4 pt-2'>
        <div>
            <img className="h-16" src={logo} alt="" />
        </div>
        <div className='font-poppins font-medium [&>span]:px-4 [&>span]:hover:cursor-pointer'>
            <span className='hover:underline underline-offset-4 decoration-[1.5px]'>Home</span>
            <span className='hover:underline underline-offset-4 decoration-[1.5px]'>About</span>
            <span className='hover:underline underline-offset-4 decoration-[1.5px]'>History</span>
            <span className='hover:underline underline-offset-4 decoration-[1.5px]'>Connect</span>
        </div>
        <div className='w-[100px]'></div>
    </div>
  )
}

export default Header