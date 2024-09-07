import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Vidiocard from './Vidiocard'
import { getAllVideosApi } from '../services/allApi'

const View = ({UploadVideoResponse}) => {
  const [deletevideoresponse,setDeleteVideoResponse]=useState("")
  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    getAllVideos()
  },[UploadVideoResponse,deletevideoresponse])
  const getAllVideos= async()=>{
    const result=await getAllVideosApi()
    console.log(result);
    if (result.status>=200 &&result.status<300) {
      setAllVideos(result.data)
    }
    
  }
  console.log(allVideos);
  
  return (
    <>
     <Row>
      { allVideos.length>0?
        allVideos?.map(video=>(
          <Col  key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
      <Vidiocard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video}/>
      </Col>
        ))
        :
        <div className='fw-bolder text-danger'>Nothing to Display</div>
      }
    </Row>
    </>
  )
}

export default View
