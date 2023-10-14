import React, { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

function EditBook() {

const [loading,setLoading]= useState(false);
const [title,setTitle]=useState('');
const [author,setAuthor]=useState('');
const [publishYear, setPublishYear]=useState('');
const [img, setImg]=useState('');
const navigate = useNavigate();
const [book,setBook]=useState({});
const { id }  = useParams();




  
useEffect(()=>{
setLoading(true);
axios.get(`http://localhost:5555/books/${id}`).then((response)=>{
    setAuthor(response.data.author);
    setTitle(response.data.title);
    setPublishYear(response.data.publishYear);
    setImg(response.data.img);
    setLoading(false);

})
.catch((err)=>{
    setLoading(false);
    alert("An Error occured. Please check console")
    console.log(err);

})
},[])

const handleEditbook=()=>{
  const data={
      title,
      author,
      publishYear,
      img
  };

  setLoading(true);
  axios
  .put(`http://localhost:5555/books/${id}`,data).then(()=>{
      setLoading(false);
      alert("changes have been saved successfully");
    navigate('/node')

  }).catch((err)=>{
   setLoading(false);
   alert('An Error occurred. Please check console')
  });
  };

  const backtohome=()=>{
    navigate('/node');
  
  }
 
  return (
    <center>
    <div className="card mt-4">
      {loading ? "Loading...Please Wait" : (
        <form>
          <div className="container mt-4">
            <div className="row mb-2">
              <div className="col-3">
                <label className="form-label ">Title</label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row mb-2">
              <div className="col-3">
                <label className="form-label">Author</label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row mb-2">
              <div className="col-3">
                <label className="form-label">Publish Year</label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  value={publishYear}
                  onChange={(e) => setPublishYear(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="row mb-2">
              <div className="col-3">
                <label className="form-label">Image URL</label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
  
            <div className="d-flex p-4 justify-content-center">
              <div className="row">
                <div className="col">
                  <button className="btn btn-danger mr-4" onClick={backtohome}>
                  Home
                  </button>
                </div>
                <div className="col">
                  <button type="button" className="btn btn-success" onClick={handleEditbook}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  </center>
  
  )
}

export default EditBook