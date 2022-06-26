import React from 'react'

export default function About() {
  return (
       <div className='w-full m-2'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
    <h1 className='text-5xl font-bold'>Trusted by  devlopers  across the world</h1>
    <p className='text-3xl py-6 text-gray-500'>A server is a computer program or device that provides a 
        service to another computer program and its user, 
        also known as the client. In a data center, the physical
         computer that a server program runs on is also 
        frequently referred to as a server. That machine might be
         a dedicated server or it might be used for 
        other purposes.</p>
        </div>
        <div>
            <div className='grid  md:grid-cols-3 gap-1 px-2 text-center'>
                <div  className='border py-8 rounded-xl shadow-xl'>
                <p  className='text-6xl font-bold text-indigo-600'>100%</p>
                <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>100k</p>
                <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </div>


        </div>
        </div>
  )
}
