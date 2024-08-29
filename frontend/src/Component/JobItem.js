import React from 'react'
import { SlUserFollow } from "react-icons/sl";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { RiStackLine } from "react-icons/ri";
export default function JobItem({data}) {
    function parseCustomDateString(dateString) {
        return new Date(dateString);
      }
      
      const date= new Date()
  return (
    <div className='w-[19%] box-border text-black h-[40vh] shadow-md mx-1 py-2 px-2'>
      <div className='w-full h-[13vh] flex justify-between py-1'><img className='text-lg font-bold h-full aspect-square w-auto' src={data.Company_logo} alt=''></img> <button className='bg-[#B0D9FF] px-2 rounded-lg h-[35%] text-sm'>{Math.floor((parseCustomDateString(date)-parseCustomDateString(data.PostedOn))/(1000 * 60 * 60))}h Ago</button></div>
      <div className='text-xl font-bold'>{data.Title}</div>
      <div className='w-full flex box-border justify-between'>
        <div className=' flex items-center'><SlUserFollow className="mr-1" /> 1-3 yr Exp</div>
        <div className=' flex items-center'><PiBuildingOfficeLight className="mr-1"/>Onsite</div>
        <div className=' flex items-center'><RiStackLine className="mr-1"/>{Math.round((data.range[0]+data.range[1])/2)}LPA</div>
      </div>
      <div className='w-full h-[10vh] pl-5'>
        <ul style={{listStyleType: "disc"}}>
        <li>{data.Description.substr(0,150)}...</li>
        </ul>
      </div>
      <button className='bg-[#41a3ff] text-white text-center w-full rounded-md h-[5vh]'>Apply Now</button>
    </div>
  )
}
