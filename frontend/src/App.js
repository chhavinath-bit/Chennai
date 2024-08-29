import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { useDebounce } from "@uidotdev/usehooks";
import { useState, useEffect } from 'react';

import JobItem from './Component/JobItem';
import SearchBar from './Component/SearchBar';

function App() {
  const [arr, setArr]= useState([])
  const[searchParam, setSearchParam]=useState({
    Title:"",
    Location:"",
    Type:"",  
    range:[0,300],
  })
  const debouncedSearchTerm = useDebounce(searchParam, 700);
  const getData= async(debouncedData)=>{
    try{
      const data= await fetch(`https://chennai.onrender.com/api/jobs/getNews?Title=${debouncedData.Title}&Location=${debouncedData.Location}&Type=${debouncedData.Type}&rangel=${debouncedData.range[0]}&rangeh=${debouncedData.range[1]}`, {
        method:"GET",
        headers:{
          "content-type":"application/json"
        },
      })
      const postedNews= await data.json()
      console.log(postedNews)
      setArr(postedNews)

    }catch(err){
      
    }
  }
  useEffect(()=>{
        getData(debouncedSearchTerm);
       console.log(debouncedSearchTerm)
  },[debouncedSearchTerm])
  return (
    <div className=" w-screen h-screen  box-border">
    <div className='w-full h-[30%] flex flex-col items-center pt-7 shadow-xl'>
      <Navbar setArr={setArr} arr={arr}/>
      <SearchBar setSearchParam={setSearchParam} searchParam={searchParam}/>
      </div>
      
      <div className='flex box border w-full flex-wrap pl-10 py-5 overflow-y-auto h-[70%]'>
        {arr.map((data)=>{
          return <JobItem key={data._id} data={data}/>
        })}
      </div>
      
    </div>
  );
}

export default App;
