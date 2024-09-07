import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryApi, removeHistoryApi } from '../services/allApi'
import { useState } from 'react'

const History = () => {
  const [historydetails,setHistoryDetails]=useState([])
  useEffect(()=>{
    getHistory ()
  },[])
  const getHistory= async()=>{
    const response=await getHistoryApi()
    console.log(response);
    if (response.status>=200 &&response.status<300) {
      setHistoryDetails(response.data)
    }
    
  }
  console.log(historydetails);

  const removeHistory =async (historyId)=>{
    await removeHistoryApi(historyId)
getHistory()

  }
  
  return (
    <div className="container">
<div className='row mt-5'>
      <div className='col-lg-6 '><h3 >Watch History</h3></div>
      <div className='col-lg-4 '></div>
      <div className="col-lg-2"><Link to={'/home'}>Back To Home</Link></div>
</div>
    <div className=''>
       <table className='table my-5 shadow '>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Time Stamp</th>
          <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
        </tr>
      </thead>
      <tbody>
       {historydetails.length>0?
       historydetails?.map((details,index)=>(
        <tr key={details?.id}>
          <td>{index+1}</td>
          <td>{details?.caption}</td>
          <td><a href="{details?.link}">{details?.link}</a></td>
          <td>{details?.timeStamp}</td>
          <td><button onClick={()=>removeHistory(details?.id)}><i class="fa-solid fa-trash text-danger "></i></button></td>
       </tr>))
       :
       <div className='text-danger fw-bolder'>Your Watch History is Empty</div>
        }
      </tbody>
     </table></div>

    </div>
  )
}

export default History
