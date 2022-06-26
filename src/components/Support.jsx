import React from 'react'
import supportImg from '../assets/images/support.jpg'
import {
    PhoneIcon,
    ArrowSmRightIcon,
} from '@heroicons/react/outline';
import {
    ChipIcon,
    SupportIcon
} from '@heroicons/react/solid'
const Support =() => {
  return (
    <div name="support" className='w-full  mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img src={supportImg} className="w-full h-full object-cover mix-blend-overlay" alt="support-img"/>
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
            <h2 className=  'text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
            <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
            <p className='py-4 text-3xl text-slate-300'> Trusted for over 25 years, we are a leader in Managed IT Services. 
                Our track record has been built upon being a bit different: from the 
                human touch and flexibility in approach, to our agility and 
                outstanding quality of service.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8' data-aos="fade-up">
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[4rem]'/>
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>A sale is a transaction between two or more parties in which 
                                the buyer receives tangible or intangible goods, services, or 
                                assets in exchange for money. In some cases, other assets are 
                                paid to a seller</p>
                                <div className='bg-slate-100 pl-8 py-4'>
                                    <p className='flex items-center text-indigo-600'>ContactUs <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    
                                </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8' data-aos="fade-up">
                            <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[4rem]'/>
                            <h3 className='font-bold text-2xl my-6'>Techincal Support</h3>
                            <p className='text-gray-600 text-xl'>With the increasing use of technology in modern times, there is 
                            a growing requirement to provide technical support. Many organizations locate their technical 
                            support departments. </p>
                                <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-indigo-600'>ContactUs <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    
                                </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8' data-aos="fade-up">
                            <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[4rem]'/>
                            <h3 className='font-bold text-2xl my-6'>Media Inquiries    </h3>
                            <p className='text-gray-600 text-xl'>Press inquiries also occur when devlopers wish to 
                            use a new release or feature article sent to them, and require further information on a 
                            company or its products.</p>
                                <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-indigo-600'>ContactUs <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
export default Support;
