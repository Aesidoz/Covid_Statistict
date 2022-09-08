import React from 'react';

function Seachbox({ setSearch }) {
  return (
    <div className='flex ' data-aos='fade-up'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        className='block w-full px-4 py-2 text-purple-700 bg-white border rounded-lg focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
        placeholder='Search...'
      />
    </div>
  );
}

export default Seachbox;
