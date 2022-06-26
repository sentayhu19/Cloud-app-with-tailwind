import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'>
        </div>
        <div>
            <div>
                <h2>Pricing</h2>
                <h3>The right price for your reasearch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid optio reiciendis, autem sed impedit fugiat similique expedita libero cumque!</p>
                <div>
                    <p><CheckIcon  className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                    <button>Get Started</button>
                </div>
            </div>

            <div>
                <div>
                    <span>Standard</span>
                    <div>
                        <p>$49<span>/mon</span></p>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ullam repudiandae officia alias possimus similique veniam eum ipsa odit ex debitis esse sint, tenetur, accusamus reprehenderit. Numquam ullam nihil assumenda!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Pricing;
