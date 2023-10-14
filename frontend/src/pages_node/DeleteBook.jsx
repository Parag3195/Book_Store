import React, { useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack} from 'react-icons/io';
import axios from 'axios';




function DeleteBook() {
  
  const navigate = useNavigate();
  const [loading,setLoading]= useState(false);
const { id }= useParams();

  // Delete book
const deletebook=()=>{

  // 
  setLoading(true);
  axios.delete(`http://localhost:5555/books/${id}`)
  .then(()=>{
    setLoading(false);
    navigate('/node');
  }).catch((err)=>{
    setLoading(false);
    alert('An Error occurred. Please check console');
console.log(err);
  });
}
const deletebookCancel=()=>{
  navigate('/node');

}


  return (
    <div>
    <div className="">
    </div>
    <Link to={`/node`}> 
    <IoMdArrowRoundBack color='black' size={50}/>
     </Link>

     {loading?("Loading"):(
      <center>
      <div className="card" style={{"width": "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Are you sure you want to delete?</h5>
        
      </div>
      <div className="card-footer bg-light d-flex justify-content-between">
        <button className='btn btn-success' onClick={deletebookCancel}>No</button>
      <button className='btn btn-danger' onClick={deletebook}>Yes</button>
      </div>
    </div>
      </center>
     )}
   </div>
  )
}

export default DeleteBook