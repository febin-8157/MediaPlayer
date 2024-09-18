import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Vidiocard from './Vidiocard'
import { getAllVideosApi, getSingleCategoryApi, updateCategoryApi, uploadVideoAPI } from '../services/allApi'

const View = ({UploadVideoResponse,removevideoresponsefromcategory,setRemoveCategoryVidoeResponseFromView}) => {
  const [deletevideoresponse,setDeleteVideoResponse]=useState("")
  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    getAllVideos()
  },[UploadVideoResponse,deletevideoresponse,removevideoresponsefromcategory])
  const getAllVideos= async()=>{
    const result=await getAllVideosApi()
    console.log(result);
    if (result.status>=200 &&result.status<300) {
      setAllVideos(result.data)
    }
    
  }
  console.log(allVideos);
  
  const dragOverView=(e)=>{
    e.preventDefault()
  }

const VideoDropFromCategory= async(e)=>{
  const {categoryId,Video}=JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(`video dropped inside view componenets,with video id : ${Video.id} from category id : ${categoryId}`);
  //delete video from category
  //get category details to updated
  const {data}= await getSingleCategoryApi(categoryId)
  console.log(data);
  //update its all vidoes after removing specific video to be draged
  const updateCategoryVideoList=data?.allVideos?.filter(item=>item.id!=Video.id)
  console.log(updateCategoryVideoList);
  const {id,categoryName}=data
  //save the changes by calling the Api
  const result= await updateCategoryApi(categoryId,{id,categoryName,allVideos:updateCategoryVideoList})
  //share response to category component
  setRemoveCategoryVidoeResponseFromView(result)
  //add removed video to allvidoes api
  await uploadVideoAPI(Video)
  //diplay all video in view
  getAllVideos()
}

  return (
    <>
     <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>VideoDropFromCategory(e)}>
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
