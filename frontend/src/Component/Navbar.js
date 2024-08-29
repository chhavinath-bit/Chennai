import React, {useRef} from 'react'
import JobForm from './JobForm'
import logo from '../Logo.png'
export default function Navbar({setArr,arr}) {
    const jobpost= useRef()
    const JobFormShow=()=>{
        jobpost.current.style.display=(jobpost.current.style.display==="flex"?"none":"flex") 
    }
  return (
    <div className='w-[70%] border border-slate-200  h-2/5 flex-shrink-0 flex items-center shadow-xl rounded-[122px] box-border text-base'>
    <div className='w-[95%] h-full top-[16px] left-[26px] flex justify-around'>

    <img className='h-full aspect-square' src={logo}></img>
    <button>Home</button>
    <button>Find Jobs</button>
    <button>Find Talents</button>
    <button>About us</button>
    <button>Testimonials</button>
    <button className='bg-[#6100AD] rounded-[30px] w-[140px] text-white' onClick={JobFormShow}>Create Jobs</button>
    
    </div>
    <JobForm setArr={setArr} arr={arr} jobpost={jobpost}/>  
    </div>
  )
}
