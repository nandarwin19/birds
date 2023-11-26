import React, { useEffect, useState } from 'react';
import jsonFile from './../Birds.json';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import BirdCard from './BirdCard';

const Birds = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setJsonData(jsonFile.Tbl_Bird);
      } catch (error) {
        console.error('Error fetching bird data:', error);
      }
    };

    fetchData();
  }, []);

  if (!jsonData) {
    return <div></div>; 
  }

  return (
    <div className={`w-full h-full max-container padding-container ${styles.paddingY} overflow-y-hidden`}>
      <h1 className='bold-28 text-center tracking-wider pt-8 md:pt-0 text-white'>✳BIRDS✳</h1>
      <div className="flex items-center justify-evenly flex-wrap gap-4 my-8">
        {jsonData.length > 0 &&
          jsonData.map((data, index) => (
            <Link to={`/birds/${data?.Id}`} key={index}>
              <BirdCard {...data} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Birds;
