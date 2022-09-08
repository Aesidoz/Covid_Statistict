import React from 'react';

function card({ nameCountry, confirm, death, recover }) {
  const trunToNumber = Number(recover);

  return (
    <div className=' bg-white rounded-xl sm:w-[400px]' data-aos='fade-up'>
      <div className='p-4'>
        <div className=' text-xl text-center font-bold pb-4'>{nameCountry}</div>
        <div className='bg-[#2D248E] text-white font-bold py-4 rounded-xl text-center  px-4 text-xl'>
          {confirm}
        </div>
        <div className='grid grid-cols-2 gap-2 py-2'>
          <div className='bg-[#D83E3E] text-white font-bold py-4 rounded-xl text-center px-4 text-xl'>
            {death}
          </div>
          <div className='bg-[#130F3D] text-white font-bold py-4 rounded-xl text-center px-4 text-xl'>
            {trunToNumber === 0 ? 'unreported' : recover}
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
