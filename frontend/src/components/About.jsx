import React from 'react'
import img2 from '../assets/images/porche-top-view.png'

function About() {
  return (
    <div className='m-10 flex gap-10'>
        <div className='flex flex-col'>
            <h1 className='text-8xl font-medium'>About</h1>
            <h2 className='text-5xl py-4'>911</h2>
            <p className='font-poppins'>The Porsche 911 is more than just a car; it’s an automotive icon that has captured the hearts of enthusiasts, celebrities, and everyday drivers alike for over half a century. With its distinct silhouette, unmistakable rear-engine layout, and legendary performance, the 911 blends tradition with cutting-edge innovation. Unlike many sports cars that remain weekend-only thrills, the 911 is engineered for both exhilarating track experiences and daily practicality, offering a rare combination of luxury, power, and usability. Celebrities from Jerry Seinfeld to David Beckham have praised its refined design and exhilarating handling, calling it a "masterpiece of engineering" and "a therapy session on wheels." Every generation of the 911 builds on its heritage while enhancing performance, solidifying its place as one of the greatest and most beloved sports cars ever made. The 911 represents not only Porsche’s commitment to excellence but also an enduring passion for the art of driving.</p>
        </div>
        <div className='flex-none'>
            <img src={img2} alt="porsche top view" />
        </div>
    </div>
  )
}

export default About