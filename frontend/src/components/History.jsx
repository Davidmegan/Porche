import React from 'react'
import img3 from '../assets/images/porsche-right-half.png'

function History() {
  return (
    <div className='m-10 flex'>
        <div className='flex-none'>
            <img src={img3} alt="porsche right half" />
        </div>
        <div>
            <h1 className='text-8xl font-medium'>History</h1>
            <h2 className='text-5xl py-4'>Porsche</h2>
            <p className='font-poppins'>Porsche, founded in 1931 by Ferdinand Porsche, began as an engineering firm and introduced its first car, the 356, in 1948. Known for its innovation and performance, Porsche has become an icon in the automotive world, especially with the legendary 911.</p>
        </div>
    </div>
  )
}

export default History