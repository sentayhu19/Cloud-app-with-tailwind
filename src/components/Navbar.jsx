import React, {usestate} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
export default function Navbar() {
  const [nav, setNav] = React.useState(false)
  const handleClick = () => setNav(!nav);
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between  items-center  w-full h-full'>
        <div className='flex items-center'>
        <h1 className='text-40xl font-bold mr-4 sm:text-4xl'>Brand</h1>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Platfoms</li>
          <li>Pricing</li>
        </ul>
        </div>
<div className='hidden md:flex pr-4'>
  <button className='border-none bg-transparent text-black mr-4'>Sign in</button>
  <button className='px-8 py-3 '>Sign up</button>
  </div>
  <div className='md:hidden' onClick={handleClick}> 
      {nav ? <MenuIcon className='w-5'/>: <XIcon className='w-5'/>}
      </div>
      </div>
      <div className={nav ? 'hidden':'' +'md:hidden'}>
      <ul className='absolute bg-zinc-200 w-full px-8px'>
      <li className='border-b-2 border-zinc-300 w-full'>Home</li>
          <li className='border-b-2 border-zinc-300 w-full'>About</li>
          <li className='border-b-2 border-zinc-300 w-full'>Support</li>
          <li className='border-b-2 border-zinc-300 w-full'>Platfoms</li>
          <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
          <li>
            <div className='flex flex-col my-4'>
      <button className='border-none bg-transparent text-black mr-4'>Sign in</button>
  <button className='px-8 py-3 '>Sign up</button>
      </div></li>
      </ul>
      </div>
    </div>
  )
}
