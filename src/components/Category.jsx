import React,{useEffect, useState} from 'react'
import {Button,Modal,Form,FloatingLabel} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryApi, getCategoryApi,removeCategoryApi } from '../services/allApi';

const category = () => {
  useEffect(()=>{
  getAllCategory()
  },[])
  const [allcategory, setAllCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory=async()=>{
    if (categoryName){
    //api call
    await addCategoryApi({categoryName,allVideos:[]})
    setCategoryName("")
    handleClose()
    getAllCategory()
    }else{
      toast.warning("please fill the form")
    }
  }

  const getAllCategory =async()=>{
    const response= await getCategoryApi()
    if(response.status>=200 && response.status<300){
      setAllCategory(response.data)
    }
  }
  console.log(allcategory);
  
  const removeCategory = async (categoryId)=>{
    await removeCategoryApi(categoryId)
    getAllCategory()
  }
  return (
    <>
     <div className="d-flex align-item-center mt-3 ">
     <h4>All Categories</h4>
     <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder fs-5 ">+</button>

     </div>

     <div className="container-fluid mt-3">
  {
   allcategory.length > 0 ? 
   allcategory.map((categoryDetails, index) => (
      <div key={index} className="border rounded p-3 mb-2">
        <div className="d-flex justify-content-between">
          <h5>{categoryDetails?.categoryName}</h5>
          <button onClick={()=> removeCategory(categoryDetails.id)} className="btn">
            <i className="fa-solid fa-trash text-danger"></i>
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-lg-6">
            {/* videos of particular categories */}
          </div>
        </div>
      </div>
    ))
     : 
   <div className='text-danger fw-bolder'>No Categoriesare Added Yet!!</div>
  }
</div>



     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="border rounded p-3">
         <FloatingLabel className='mb-3' controlId="floatingInputName" label="Category Name">
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
    

         </div>
        </Modal.Body>
        <Modal.Footer>
         
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
           <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default category
