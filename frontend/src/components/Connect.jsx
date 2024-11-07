import React from 'react'
import img4 from '../assets/images/porsche-diagonal.png'

function Connect() {
  return (
    <div className='flex justify-between m-10 gap-10'>
        <div>
            <h1 className='text-8xl font-medium'>Connect</h1>
            <h2 className='text-5xl py-4'>Us</h2>
            <ul className='flex gap-4'>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
        <div>
            <img src={img4} alt="porsche diagonal" />
        </div>
    </div>
  )
}

export default Connect