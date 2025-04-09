import React from 'react'
import { assets } from '../assets/assets'
import Logo from '../pages/Logo'

const Footer = () => {
 

  return (
    <div className='md:mx-10'>
      
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
      
        <div>
          {/*<img className='mb-5 w-40' src={assets.logo} alt="" />
           <div onClick={() => navigate('/')} className='w-44 cursor-pointer text-blue-600 font-bold text-3xl'>
                CareConnect
            </div>*/}
            <Logo/>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>At CareConnect, we're redefining healthcare with a smart, unified platform that connects patients, providers, and administrators. By eliminating fragmented workflows and enhancing accessibility, we empower users to manage health seamlessly—anytime, anywhere.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ CareConnect.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
