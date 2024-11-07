import React from 'react'
import img1 from '../assets/images/porschehome.png'

function Home() {
  return (
    <div>
        <div className='flex flex-col items-center leading-none'>
            <div className='font-porsche text-[8rem]'>PORSCHE
                <div className='text-right text-[6rem] text-red-800'>911</div>
            </div>
            {/* <div className='font-porsche text-right'>911</div> */}
            <div className='relative px-10'>
                <img className='w-[90%] mx-auto' src={img1} alt="porsche side image" />
                <div className='absolute top-2 left-10 w-1/3 font-poppins text-lg font-medium'>“Driving a 911 is a therapy session on wheels. You lose yourself in the car and find peace.” <br />– Magnus Walker</div>
            </div>
        </div>
    </div>
  )
}

export default Home