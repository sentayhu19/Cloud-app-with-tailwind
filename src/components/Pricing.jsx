import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name="pricing" className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'>
        </div>
        <div className='max-w-[1240px] mx-auto py-12 text-center'>
            <div className='py-8 text-slate-300'>
                <h2 className='text-3xl  uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your reasearch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid optio reiciendis, autem sed impedit fugiat similique expedita libero cumque!</p>
                </div>
                <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='upercase px-3 py-1 bg-indigo-200 text-indego-900 rounded-2xl text-sm '>Standard</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mon</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ullam repudiandae officia alias possimus similique veniam eum ipsa odit ex debitis esse sint, tenetur, accusamus reprehenderit. Numquam ullam nihil assumenda!
                    </p>
                
            
                <div className='text-2xl '>
                    <p className='flex py-4'><CheckIcon  className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='upercase px-3 py-1 bg-indigo-200 text-indego-900 rounded-2xl text-sm '>Premnium</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$79<span className='text-xl text-slate-500 flex flex-col justify-end'>/mon</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ullam repudiandae officia alias possimus similique veniam eum ipsa odit ex debitis esse sint, tenetur, accusamus reprehenderit. Numquam ullam nihil assumenda!
                    </p>
                
            
                <div className='text-2xl '>
                    <p className='flex py-4'><CheckIcon  className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
                </div>
                </div>
            </div>
    </div>
  )
}
export default Pricing;
