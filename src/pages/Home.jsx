import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
const Home = () => {
  const[removeCategoryVidoeResponseFromView,setRemoveCategoryVidoeResponseFromView]=useState("")
  const[UploadVideoResponse,setUploadVideoResponse]=useState("")
  const[removevideoresponsefromcategory,setRemoveVideoResponseFromCategory]=useState("")
  return (
    <>
    <div className="container d-flex justify-content-between">
    <Add setUploadVideoResponse={setUploadVideoResponse}/>
    <Link to={'/history'}>Watch History</Link>
    </div>
    <div className='container-fluid row my-5'>
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View setRemoveCategoryVidoeResponseFromView={setRemoveCategoryVidoeResponseFromView}  UploadVideoResponse={UploadVideoResponse} removevideoresponsefromcategory={removevideoresponsefromcategory}/>
      </div>


      <div className="col-lg-6">
           <Category removeCategoryVidoeResponseFromView={removeCategoryVidoeResponseFromView} setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory}/>
      </div>
    </div>
    </>
  )
}

export default Home
