import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { GoChevronDown } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
export default function SearchBar({searchParam, setSearchParam}) {
    function valuetext(value) {
        return `${value}°C`;
      }
    const OnChangeInput=(e)=>{
        setSearchParam({
            ...searchParam,
            [e.target.name]:e.target.value
        })

    }
    ;

  const handleChange = (event, newValue) => {
    setSearchParam({
     ...searchParam,
     range:[...newValue]
    });
    console.log(newValue);
  };
  return (
    <div className='h-1/3 flex flex-shrink-0 w-full items-center mt-10'>
         <div className='w-1/4 h-full flex items-center'><CiSearch className='w-1/5 h-2/5'/> <input placeholder="Search By Job Title, Role" name='Title' className='w-4/5 h-1/2 outline-none' value={searchParam.Title} onChange={OnChangeInput} type="text"/> </div>
         <div className='w-px h-2/3 bg-black'></div>
         <div className='w-1/4 h-full flex items-center'><CiLocationOn className='w-1/5 h-2/5'/> <input placeholder="Preferred Location" name="Location" className='w-3/5 h-1/2 outline-none' value={searchParam.Location} onChange={OnChangeInput} type="text"/> <GoChevronDown className='w-1/5 h-2/4'/> </div>
         <div className='w-px h-2/3 bg-black'></div>
         <div className='w-1/4 h-full flex items-center'><svg className='w-1/5 h-1/3' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 17C13 14.7909 10.3137 13 7 13C3.68629 13 1 14.7909 1 17M14.8281 3.17188C15.1996 3.54331 15.4942 3.98427 15.6952 4.46957C15.8962 4.95487 15.9999 5.47533 15.9999 6.00062C15.9999 6.52591 15.8963 7.04497 15.6953 7.53027C15.4943 8.01558 15.1996 8.45705 14.8281 8.82848M17 1C17.6566 1.65661 18.1775 2.43612 18.5328 3.29402C18.8882 4.15192 19.0718 5.07127 19.0718 5.99985C19.0718 6.92844 18.8886 7.84815 18.5332 8.70605C18.1778 9.56396 17.6566 10.3435 17 11.0001M7 10C4.79086 10 3 8.20914 3 6C3 3.79086 4.79086 2 7 2C9.20914 2 11 3.79086 11 6C11 8.20914 9.20914 10 7 10Z" stroke="#686868" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 <select className='w-4/5 h-1/2 outline-none' name='Type' value={searchParam.Type} onChange={OnChangeInput}> 
           <option value="" defaultValue>-- Select an option --</option>
            <option>Internship</option>
            <option >Full Time</option>
            <option>Part-time</option>
            <option>Contract</option>
 </select> </div>
         <div className='w-px h-2/3 bg-black'></div>
         
         <div className='w-1/4 h-full items-center px-10'>
         <div className='flex w-full justify-between text-sm'>
            <div>Salary Per Month</div>
            <div className='flex items-center'><BsCurrencyRupee/>{searchParam.range[0]}k-<BsCurrencyRupee/>{searchParam.range[1]}k</div>
         </div>
         <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Salary range'}
        value={searchParam.range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        color="black"
      />
    </Box>
          </div>
      </div>
  )
}
