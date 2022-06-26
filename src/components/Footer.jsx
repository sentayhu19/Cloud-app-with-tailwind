import React from 'react';
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2 '>Solutions</h6>
                <ul>
                    <li  className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 '>Tech upport</h6>
                <ul>
                    <li  className='py-1'>Installation</li>
                    <li className='py-1'>Configuration</li>
                    <li className='py-1'>Hardware operating systems</li>
                    <li className='py-1'>Applications</li>
                    <li className='py-1'>Linux</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 '>Terms</h6>
                <ul>
                    <li  className='py-1'>Registration</li>
                    <li className='py-1'>Fees</li>
                    <li className='py-1'>Security measures</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Reference </li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 '>Security</h6>
                <ul>
                    <li  className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p>Subscribe to our news letter</p>
                <p>The latest news,articles, and resources, sent to your inbox. </p>
                <form>
                <input type="email"/>
                <button>Subscribe</button>
                </form>

            </div>
        </div>
        <div>
            <p>2022 All Rights Reserved</p>
            <div>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
                <FaGithub/>
            </div>
        </div>
    </div>
  )
}
export default Footer;  
