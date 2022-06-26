import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa';

const Footer = () => (
  <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
    <div className="max-w[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border b-2 border-gray-600 py-8">
      <div>
        <h6 className="font-bold uppercase pt-2 ">Solutions</h6>
        <ul>
          <li className="py-1">Marketing</li>
          <li className="py-1">Analytics</li>
          <li className="py-1">Commerce</li>
          <li className="py-1">Data</li>
          <li className="py-1">Cloud</li>
        </ul>
      </div>
      <div>
        <h6 className="font-bold uppercase pt-2 ">Tech Support</h6>
        <ul>
          <li className="py-1">Installation</li>
          <li className="py-1">Configuration</li>
          <li className="py-1">Hardware operating systems</li>
          <li className="py-1">Applications</li>
          <li className="py-1">Linux</li>
        </ul>
      </div>
      <div>
        <h6 className="font-bold uppercase pt-2 ">Terms</h6>
        <ul>
          <li className="py-1">Registration</li>
          <li className="py-1">Fees</li>
          <li className="py-1">Security measures</li>
          <li className="py-1">Data</li>
          <li className="py-1">Reference </li>
        </ul>
      </div>
      <div>
        <h6 className="font-bold uppercase pt-2 ">Security</h6>
        <ul>
          <li className="py-1">Marketing</li>
          <li className="py-1">Analytics</li>
          <li className="py-1">Commerce</li>
          <li className="py-1">Data</li>
          <li className="py-1">Cloud</li>
        </ul>
      </div>
      <div className="col-span-2 pt-8 md:pt-2">
        <p className="uppercase font-bold">Subscribe to our newsletter</p>
        <p>The latest news,articles, and resources, sent to your inbox. </p>
        <form className="flex flex-col sm:flex-row" action="#">
          <input className="w-full p-2 mr-4 rounded-md mb-4" required placeholder="Enter Email address" type="email" />
          <button type="submit" className="p-2 mb-4 text-white border bg-indigo-600  rounded-md">Subscribe</button>
        </form>

      </div>
    </div>
    <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text -gray-500">
      <p className="py-4">&copy; 2022 All Rights Reserved</p>
      <div className="flex justify-between sm:w-[300px] p-4  text-2xl">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaTwitch />
        <a role="button" target="blank" href="https://github.com/sentayhu19"><FaGithub /></a>
      </div>
    </div>
  </div>
);
export default Footer;
