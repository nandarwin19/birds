import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import jsonFile from './../Birds.json';

const BirdCardPage = () => {
  const { birdId } = useParams();
  const [birdData, setBirdData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bird = jsonFile.Tbl_Bird.find((bird) => bird.Id.toString() === birdId);
        setBirdData(bird);
      } catch (error) {
        console.error('Error fetching bird data:', error);
      }
    };

    fetchData();
  }, [birdId]); // to re-run the effect when birdId changes

  //Back Button with react router
  const goBack = () => {
    navigate(-1);
  }

  if (!birdData) {
    return <div>Loading...</div>; 
  }

  const { BirdEnglishName, BirdMyanmarName, ImagePath, Description } = birdData;

  return (
    <div className="w-full min-h-screen md:h-[90vh] lg:min-h-screen pt-32 pb-8 md:pt-[180px] flex items-center justify-center text-white">
      <div className="w-[80%] h-auto p-8 rounded-3xl flex items-start flex-col md:flex-row bg-[#1a1919] gap-8 overflow-x-hidden">
        <img src={`/` + `${ImagePath}`} alt="img" className='w-[500px] md:w-[250px] lg:w-[400px] h-full md:h-[320px] object-cover rounded-3xl'/>
        <div className="flex items-start justify-between md:justify-start flex-col w-full my-0 md:my-4 gap-4 md:lg-0">
            <div className="flex flex-wrap flex-col items-start justify-start gap-4 w-2/3">
                <h1 className='bold-22 xl:bold-32 tracking-wider w-full'>{BirdMyanmarName}</h1>
                <h1>(<span className='regular-16 lg:regular-18 text-zinc-300 tracking-wider w-full'>{BirdEnglishName}</span>)</h1>
            </div>
            <p className='regular-14'>{Description}</p>
            <button onClick={goBack} className='btn_card'>Back</button>
        </div>
        
    </div>
      
    </div>
  );
};

export default BirdCardPage;
