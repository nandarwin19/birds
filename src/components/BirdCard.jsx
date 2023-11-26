import React, { useState } from 'react';
import { GoStarFill } from "react-icons/go";
// import img from "../../public/img/10_LineatedBarbet.jpg"
// import img from ""

const BirdCard = ({
    BirdEnglishName,
    BirdMyanmarName,
    ImagePath,
    id
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={id}
      className={`w-[310px] h-full p-4 rounded-3xl flexBetween flex-col bg-[#1e1e1e] my-4 ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >            
        <img src={`/` + `${ImagePath}`} alt="img" className='w-full h-[180px] object-cover rounded-3xl'/>
        <div className="flexBetween w-full my-4 gap-1">
            <div className="flex flex-wrap flex-col items-start justify-start gap-1 w-2/3 flex-1">
                <h1 className={`regular-16 ${isHovered ? 'text-white' : 'text-zinc-200'} hover:text-white tracking-wider w-full`}>{BirdEnglishName}</h1>
                <h1 className={`regular-16 tracking-wider ${isHovered ? 'text-white' : 'text-zinc-200'} hover:text-white w-full`}>{BirdMyanmarName}</h1>
            </div>
            <div className="w-1/2 flex items-end justify-end flex-1">
              <GoStarFill className={`w-[30px] h-[30px] ${isHovered ? 'text-white' : 'text-zinc-400'} hover:text-white transition-all 0.4s`} />
            </div>
        </div>
    </div>
  );
}

export default BirdCard;
