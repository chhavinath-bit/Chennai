import React, { useState , useRef} from 'react'

export default function JobForm({jobpost, setArr, arr}) {
  const [jobInfo, setJobInfo]= useState({
    Company_logo:"",
    Title:"",
    Company:"",
    Location:"",
    Type:"",  
    Deadline:"",
    rangelt:"",
    rangeht:"",
    Description:"",
  })
  const errmsg = useRef("");
  const OnChangeInput=(e)=>{
    setJobInfo({
      ...jobInfo,
      [e.target.name]:e.target.value
    })
  }
  function parseDate(dateString) {
    const [year, month, day ] = dateString.split('-');
    
    return new Date(year, month - 1, day);
  }
  const SubmitJob=async()=>{
   
    const inputDate= parseDate(jobInfo.Deadline)
    const currentDate= new Date()
    if(jobInfo.Company_logo===""){
      errmsg.current.style.display = "flex";
      errmsg.current.innerText = "Please Provide a logo url";
      setTimeout(() => {
        errmsg.current.style.display = "none";
        errmsg.current.innerText = "";
      }, 3000);
      return;
    }
    if(jobInfo.Title===""){
      errmsg.current.style.display = "flex";
      errmsg.current.innerText = "Please Provide a Job Title";
      setTimeout(() => {
        errmsg.current.style.display = "none";
        errmsg.current.innerText = "";
      }, 3000);
      return;
    }
    if(jobInfo.Company===""){
      errmsg.current.style.display = "flex";
      errmsg.current.innerText = "Please Provide a Company Name";
      setTimeout(() => {
        errmsg.current.style.display = "none";
        errmsg.current.innerText = "";
      }, 3000);
      return;
    }
    if(jobInfo.Location===""){
      errmsg.current.style.display = "flex";
      errmsg.current.innerText = "Please Choose Preferred Location";
      setTimeout(() => {
        errmsg.current.style.display = "none";
        errmsg.current.innerText = "";
      }, 3000);
      return;
    }
    if(jobInfo.Type===""){
      errmsg.current.style.display = "flex";
      errmsg.current.innerText = "Please Select a Job Type";
      setTimeout(() => {
        errmsg.current.style.display = "none";
        errmsg.current.innerText = "";
      }, 3000);
      return;
    }
    if(jobInfo.rangelt==="" || jobInfo.rangeht==="" || Number(jobInfo.rangelt)> Number(jobInfo.rangeht)){
      
      
      errmsg.current.style.display = "flex";
      errmsg.current.innerText = "Please Provide valid Salary Range";
      setTimeout(() => {
        errmsg.current.style.display = "none";
        errmsg.current.innerText = "";
      }, 3000);
      return;
    }
    if(jobInfo.Deadline===""|| inputDate<currentDate){
      errmsg.current.style.display = "flex";
      errmsg.current.innerText = "Please Provide a valid application Deadline";
      setTimeout(() => {
        errmsg.current.style.display = "none";
        errmsg.current.innerText = "";
      }, 3000);
      return;
    }
    
    if(jobInfo.Description===""){
      errmsg.current.style.display = "flex";
      errmsg.current.innerText = "Please Provide a Job Description";
      setTimeout(() => {
        errmsg.current.style.display = "none";
        errmsg.current.innerText = "";
      }, 3000);
      return;
    }
    try{
      const data= await fetch('http://localhost:5000/api/jobs/postNews', {
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          Company_logo: jobInfo.Company_logo,
          Title:jobInfo.Title,
          Company:jobInfo.Company,
          Location:jobInfo.Location,
          Type:jobInfo.Type,  
          Deadline:jobInfo.Deadline,
          range:[Number(jobInfo.rangelt),Number(jobInfo.rangeht)],
          Description:jobInfo.Description,
        })
      })
      const postedNews= await data.json()
      if(data.status===200){
        alert("JOB Posted");
        jobpost.current.style.display="none"
        setArr(arr.concat(postedNews));


      }

    }catch(err){
      errmsg.current.style.display = "flex";
    errmsg.current.innerText = "Internal Server Error";
    setTimeout(() => {
      errmsg.current.style.display = "none";
      errmsg.current.innerText = "";
    }, 3000);
    return;
    }
    
  }
  return (
    <div ref={jobpost} className="fixed w-[42vw] h-max hidden text-black border border-slate-300 bg-white top-0 bottom-0 left-0 right-0 m-auto rounded-[16px] flex-col items-center p-5 ">
     <h1 className='w-2/3 text-center text-xl font-bold '>Create Job Opening</h1>
     <div className='w-full flex flex-col box-border text-lg justify-around mt-3 h-[10vh] flex-shrink-0 px-4'>
     <label className='h-1/3 my-1 font-semibold ml-1'>Logo Url</label>
            <input type="text" className='border border-slate-300 w-full h-3/5 rounded-xl pl-1 text-base' name="Company_logo" onChange={OnChangeInput} value={jobInfo.Company_logo}></input>
     </div>
     <div className='w-full flex box-border text-lg justify-around mt-3 h-[10vh] flex-shrink-0'>
        <div className='w-[45%] flex flex-col h-full'>
            <label className='h-1/3 my-1 font-semibold ml-1'>Job Title</label>
            <input type="text" className='border border-slate-300 w-full h-3/5 rounded-xl pl-1 text-base' name="Title" onChange={OnChangeInput} value={jobInfo.Title}></input>
        </div>
        <div className='w-[45%] flex flex-col h-full'>
        <label className='h-1/3 my-1 font-semibold ml-1'>Company Name</label>
        <input placeholder='Amazon, Microsoft, Swiggy' type="text" className='border border-slate-300 w-full h-3/5 rounded-xl pl-1 text-base' name='Company' onChange={OnChangeInput} value={jobInfo.Company}></input>
        </div>
     </div>
     <div className='w-full flex box-border text-lg justify-around mt-3 h-[10vh] flex-shrink-0'>
        <div className='w-[45%] flex flex-col h-full'>
            <label className='h-1/3 my-1 font-semibold ml-1'>Location</label>
            <input placeholder='Choose Preferred Location' type="text" className='border text-base border-slate-300 w-full h-3/5 rounded-xl pl-1' name="Location" onChange={OnChangeInput} value={jobInfo.Location}></input>
        </div>
        <div className='w-[45%] flex flex-col h-full'>
        <label className='h-1/3 my-1 font-semibold ml-1'>Job Type</label>
        <select onChange={OnChangeInput} className='border border-slate-300 w-full h-3/5 rounded-xl pl-1 text-base' name="Type" value={jobInfo.Type}>
           <option value="" disabled defaultValue>-- Select an option --</option>
            <option>Internship</option>
            <option >Full Time</option>
            <option>Part-time</option>
            <option>Contract</option>
        </select>
        </div>
     </div>
     <div className='w-full flex box-border text-lg justify-around mt-3 h-[10vh] flex-shrink-0'>
        <div className='w-[45%] flex flex-col h-full'>
            <label className='h-1/3 my-1 font-semibold ml-1'>Salary Range</label>
            <div className='w-full h-3/5 flex justify-around text-base'>
            <input onChange={OnChangeInput} type="number" className='border border-slate-300 w-[45%] h-full rounded-xl pl-1' name='rangelt' value={jobInfo.rangelt}></input>
            <input onChange={OnChangeInput} type="number" className='border border-slate-300 w-[45%] h-full rounded-xl pl-1' name='rangeht' value={jobInfo.rangeht}></input>
            </div>
        </div>
        <div className='w-[45%] flex flex-col h-full '>
        <label className='h-1/3 my-1 font-semibold ml-1'>application Deadline</label>
        <input onChange={OnChangeInput} name='Deadline' value={jobInfo.Deadline} type='date' className='border border-slate-300 w-full h-3/5 rounded-xl pl-1 text-base'>
        </input>
        </div>
     </div>
     <div className='w-full box-border text-lg justify-around mt-3 h-[30vh] flex-shrink-0 px-4'>
     <label className='h-1/3 my-1 font-semibold ml-1'>Job Description</label>
       <textarea onChange={OnChangeInput} placeholder='Please share a description to let the candidate know more about the job role'  className='w-full text-base h-2/3 border border-slate-300 rounded-xl pl-1' name="Description" value={jobInfo.Description}>

       </textarea>
     </div>
     <div className='w-full box-border flex justify-between h-[10vh] flex-shrink-0 px-4 text-lg'>
     <button className='border-2 border-black w-1/3 rounded-xl h-3/4' onClick={()=> jobpost.current.style.display="none"}>Save Draft</button>
      <button className='w-1/3 bg-[#00AAFF] text-white rounded-xl h-3/4' onClick={SubmitJob}>Publish</button>
     </div>
     <p className="mt-3 text-red-600 text-xl italic hidden h-[5%]" ref={errmsg}>
          {" "}
        </p>
    </div>
  )
}
