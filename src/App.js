import { useState, useEffect } from 'react';
import axios from 'axios';
import Toper from './components/header.js';
import Body from './components/worldStatistict.js';
import Page2 from '../src/components/nextPage.js';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  const [update, setUpdate] = useState({ data: [] });

  const FetchData = async () => {
    const result = await axios('https://api.covid19api.com/summary');
    setUpdate(result.data);
  };
  useEffect(() => {
    FetchData();
  }, []);

  const Date = update.Date;
  const Globaldata = update.Global;
  const CountryData = update.Countries;

  return (
    <BrowserRouter>
      <div>
        <Toper updateday={Date} />
        <Body Globaldata={Globaldata} />
        <div className='pt-4'>
          <div className='flex justify-center text-xl font-bold sm:text-2xl'>
            Check the total number each country
          </div>
          <div className='flex justify-center'>
            <button className='bg-[#2D248E] hover:bg-[#5348D1] text-white font-bold p-4 rounded-lg mt-4'>
              <Link to='#findCountry'>Click Here</Link>
            </button>
          </div>
        </div>
        <Page2 Country={CountryData} />
      </div>
    </BrowserRouter>
  );
}

export default App;
