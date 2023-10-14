import React, { useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack} from 'react-icons/io';
import axios from 'axios';
import { php_BASE_URL } from '../util';




function DeleteBook() {
  
  const navigate = useNavigate();
  const [loading,setLoading]= useState(false);
  const { id }= useParams();

const deletebook=()=>{
axios.delete(`${php_BASE_URL}/books/${id}`)
  .then(()=>{
    setLoading(false);
    navigate('/php');
  }).catch((err)=>{
    setLoading(false);
    alert('An Error occurred. Please check console');
console.log(err);
  });
  // 
  setLoading(true);
}

const deletebookCancel=()=>{
  navigate('/php');
}


  return (
    <div>
    <div className="">
    </div>
    <Link to={`/`}> 
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