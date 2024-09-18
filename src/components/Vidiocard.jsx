import React,{useState} from 'react'
import {Card,Modal} from 'react-bootstrap';
import { removeVideoApi, storeHistoryApi } from '../services/allApi';

const Vidiocard = ({displayData,setDeleteVideoResponse,insideCategory}) => {
  
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //save history in json server
    const {caption,link} = displayData
    //get date & time to watch video
    const sysTime = new Date()
    const timeStamp = sysTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const videoDetails = {caption,link,timeStamp}
    await storeHistoryApi(videoDetails)
    


  }
  
const removeVideo = async(videoId)=>{
  const result=await removeVideoApi(videoId)
//pass response to view component (child to parent)
setDeleteVideoResponse(result?.data)}

const videoDragStart=(e,videoId)=>{
  console.log(`dragging started with video id : ${videoId}`);
  //share video id along with on drragstartevent
  e.dataTransfer.setData("vId",videoId)
  
}
  return (
    <>
      <Card draggable={true} onDragStart={e=>videoDragStart(e,displayData?.id)} >
      <Card.Img onClick={handleShow} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Text className='d-flex align-item-center justify-content-between'>
          <p>{displayData?.caption}</p>
       {  !insideCategory &&      
         <button className='btn' onClick={()=>removeVideo(displayData?.id)}><i class="fa-solid fa-trash text-danger"></i></button>
         }
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='rounded ' width="100%" height="480" src={`${displayData?.link}?autoplay=1`} title="Caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Vidiocard
