import React from 'react';
import iconPic from '../../src/icons/ICON1.png';

function worldStatistict({ Globaldata }) {
  const newRegenData = Globaldata?.TotalRecovered;

  const trunToNumber = Number(newRegenData);

  console.log(trunToNumber);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 pt-4 sm:pt-[40px] '>
      <div className='flex justify-center sm:hidden'>
        <p>Statistict Record "</p>
        <p className='font-bold text-[#2D248E]'>COVID-19</p>
        <p>" around the world </p>
      </div>
      <div className='hidden sm:inline'>
        <div className='flex  justify-center'>
          <img className='w-[250px] h-[250px] ' src={iconPic} alt='Logo' />
        </div>
        <div className='py-6'>
          <div className='flex  justify-center text-3xl'>Statistict Record</div>
          <div className='flex  justify-center text-7xl text-[#2D248E] font-bold'>
            COVID-19
          </div>
          <div className='flex  justify-center text-3xl'>around the world</div>
        </div>
      </div>
      <div className=''>
        <div className=' mx-5 mb-5 sm:mb-0'>
          <div className='bg-[#2D248E] rounded-lg my-4 py-4 sm:py-8 '>
            <div className='text-white  px-4 text-2xl font-bold  sm:text-4xl'>
              Total Confirmed
            </div>
            <div className=' text-white  font-bold text-end px-4 text-3xl sm:text-7xl '>
              {Globaldata?.TotalConfirmed.toLocaleString('en-US')}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 '>
            <div className='bg-[#D83E3E] rounded-lg py-4 sm:py-8'>
              <div className='text-white px-4 text-2xl font-bold sm:text-4xl '>
                Total Death
              </div>
              <div className=' text-white text-end px-4 text-2xl sm:text-7xl  '>
                {Globaldata?.TotalDeaths.toLocaleString('en-US')}
              </div>
            </div>
            <div className='bg-[#130F3D] rounded-lg  py-4 sm:py-8'>
              <div className='text-white px-4 text-lg  font-bold sm:text-4xl'>
                Total Recovered
              </div>
              <div className=' text-white text-end px-4 text-xl pt-2 sm:text-6xl  sm:pt-3'>
                {trunToNumber === 0 ? 'Unreported' : newRegenData}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default worldStatistict;
