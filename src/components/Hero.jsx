import React from 'react';
import bird from "./../assets/hero.jpg";
import Birds from './Birds';

const Hero = () => {
  return (
    <div className='w-full h-full relative'>
      <div className="w-full h-screen relative">
        <div className="max-container padding-container">
          <div className="flex items-center text-black md:items-start justify-center flex-col md:gap-8">
            <h1 className='bold-64 text-center md:text-start md:bold-88 mt-[150px] lg:mt-[200px] tracking-wider'>
              Enjoy <span className='md:block'>my colors</span>
            </h1>
            <div className="flex items-start justify-center gap-4 mt-12 md:mt-0">
              <img src={bird} alt="" className='w-[200px] h-[150px] object-cover rounded-3xl'/>
              <div className="flex flex-col">
                <h3 className='bold-14 md:bold-16'>Feathers and Flights</h3>
                <p className='md:w-[440px] regular-13 md:regular-14'>
                  Explore avian wonders, vibrant plumage, and melodious songs in this captivating journey through the diverse world of birds.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden text-black md:flexStart gap-12 absolute bottom-3">
            <div className="flex flex-col">
              <h1 className='bold-18'>680</h1>
              <p className='regular-14'>Total Birds</p>
            </div>
            <div className="flex flex-col">
              <h1 className='bold-18'>446</h1>
              <p className='regular-14'>Species</p>
            </div>
            <div className="flex flex-col">
              <h1 className='bold-18'>25</h1>
              <p className='regular-14'>Difference</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-[#111010] p-8`}>
        <Birds/>
      </div>

    </div>
  )
}

export default Hero;
