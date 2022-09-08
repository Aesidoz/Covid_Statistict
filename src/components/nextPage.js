import CardStatistict from './card.js';
import Search from '../components/Seachbox.js';
import { useEffect, useState } from 'react';

function NextPage({ Country }) {
  const [search, setSearch] = useState('');
  const [filteredCountry, setFilteredCountry] = useState([]);

  //   console.log(search);
  //   console.log(Country);

  useEffect(() => {
    window.AOS.init({
      // Initialization
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const filteredCountry = Country?.filter((country) =>
      country.Country.toUpperCase().includes(search.toUpperCase())
    );
    setFilteredCountry(filteredCountry);
  }, [search, Country]);

  return (
    <div className='bg-[#ECEBFA] mt-[50px]'>
      <div
        className='flex justify-center  text-center text-md pt-8  px-4 font-bold sm:text-3xl'
        id='findCountry'
      >
        Find country what you want to know statistict{' '}
      </div>
      <div className=' p-10 '>
        <Search setSearch={setSearch} />
      </div>
      <div className=' pb-10 grid grid-cols-1 gap-y-6 justify-items-center sm:grid-cols-3  '>
        {filteredCountry?.map((find) => (
          <CardStatistict
            nameCountry={find.Country}
            confirm={find.TotalConfirmed.toLocaleString('en-US')}
            death={find.TotalDeaths.toLocaleString('en-US')}
            recover={find.TotalRecovered.toLocaleString('en-US')}
          />
        ))}
      </div>
    </div>
  );
}

export default NextPage;
