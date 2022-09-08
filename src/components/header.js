import React from 'react';

function header({ updateday }) {
  return (
    <div className='bg-[#2D248E]  w-[100%]  h-16'>
      <div className='flex w-[100%]  h-[100%] text-white  sm:justify-between px-8'>
        <div className='w-[100%] my-auto sm:w-auto '>
          <p className=' font-bold text-xl h-[100%] text-center '>
            COVID-TODAY
          </p>
        </div>
        <div className='my-auto'>
          <p className='hidden  sm:inline '>Update: {updateday}</p>
        </div>
      </div>
    </div>
  );
}

export default header;
