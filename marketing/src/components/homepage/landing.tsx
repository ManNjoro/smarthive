import React from 'react'

import Image from 'next/image'

import Svg from '@/public/line.svg'

const LandingPage = () => {
  return (
    <section className='dark:text-[#adadad] md:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='h-[88vh] gap-10 flex flex-col justify-center'>
                <h1 className='font-semibold 
                text-5xl'><span className='text-[#878787]'>The Future for E-commerce</span></h1>
                <p className='font-semibold text-3x1'>Where retail meets analytics.</p>
                <a href="/register" className='bg-[#104068] rounded-lg h-12 w-60 text-black-50 font-bold flex justify-center items-center'>
  Get Started
</a>

            </div>
            <div className='h-[88vh] flex justify-center items-center'>
              <Image
              src={Svg}
              alt='line'
              className='w-[50%]'
              />
            </div>
        </div>
    </section>
  );
};

export default LandingPage;
