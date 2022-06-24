import React from 'react'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  serverIcon,
} from '@heroicons/react/solid'
import cyber1 from '../assets/images/cyber1.jpg'
const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique sequence and production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Managment</h1>
          <p>This is our Tech brand.</p>
          <button className='py-3 px-6 sm:[60%] my-4'>Get started</button>
        </div>
        <div>
  <img src={cyber1} className=' my-[100px] md: w-[550px]' alt='cyber'/>
  </div>
  <div className=' absoluteflex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1
  md:left-1/2 transform md:translate-x-1/2 bg-zinc-200
  border border-slate-300 rounded-xl ext-center shadow-xl
  '>
    <p>Data Service</p>
  <ul className='flex justify-between flex-wrap px-4'>
    <li className='py-2 px-4 text-slate-500'><p><CloudUploadIcon className='h-6  text-indigo-600'/> Security</p></li>
    <li className='py-2 px-4  text-slate-500'><p><DatabaseIcon className='h-6 text-indigo-600'/>Dashboard</p></li>
    <li className='py-2 px-4  text-slate-500'><p><serverIcon className='h-6 text-indigo-600'/> Server</p></li>
    <li className='py-2 px-4  text-slate-500'><p><PaperAirplaneIcon className='h-6 text-indigo-600'/>API</p></li>
  </ul>
  </div>
      </div>
    </div>
  )
}
export default Hero;
