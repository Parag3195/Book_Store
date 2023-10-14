import React, { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaEdit} from 'react-icons/fa';
import { MdDelete} from 'react-icons/md';
import { BsFillInfoCircleFill , BsBook} from 'react-icons/bs';
import { php_BASE_URL } from '../util';


function Home() {
  const divStyle = {
    backgroundColor: '#b1b1b1', // Set your desired background color
  };
const [books, setBooks] =useState([]);
const [loading,setLoading]= useState(false);

useEffect(()=>{
setLoading(true);
axios.get(`${php_BASE_URL}/books`).then((response)=>{
  console.log('b',response.data)
    setBooks(response?.data);
    setLoading(false);
})
.catch((err)=>{
    console.log(err);
    setLoading(false);
})
},[])
// ===============================
// Create Book

const [title,setTitle]=useState('');
const [author,setAuthor]=useState('');
const [publishYear, setPublishYear]=useState('');
const [img, setImg]=useState('');
const navigate = useNavigate();

const handleSavebook=()=>{
const data={
    title,
    author,
    publishYear,
    img,
};
setTitle('');
      setAuthor('');
      setPublishYear('');
      setImg('');
setLoading(true);

axios.post(`${php_BASE_URL}/books`,data).then(()=>{
  // console.log(data);
    setLoading(false);
    window.location.reload();
}).catch((err)=>{
 setLoading(false);
 alert('An Error occurred. Please check console');
});

};



  return (
    <center className='p-4'>
        <h1 className=''>List of Books</h1>
        <div className="d-flex justify-content-between">

       
<button type="button" className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
 <h4> Add Book <BsBook/> </h4>
</button>

<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header ">
        <h5 className="modal-title" id="exampleModalLabel">Add Book</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {loading?("Loading...Please Wait"):(
   <form >

<div className="row mb-2">
    <div className="col-3">
     <label className="form-label">Title</label>
    </div>
    <div className="col-9 mb-2">
    <input type="text"
    value={title}
    onChange={(e)=>setTitle(e.target.value)} required />
    </div>
</div>

<div className="row mb-2">
    <div className="col-3 ">
     <label className="form-label">Author</label>
    </div>
    <div className="col-9">
    <input type="text"
    value={author}
    onChange={(e)=>setAuthor(e.target.value)} required />
    </div>
</div>

<div className="row mb-2">
    <div className="col-3">
    <label  className="form-label">Publish Year</label>

    </div>
    <div className="col-9">
    <input type="text"
    value={publishYear}
    onChange={(e)=>setPublishYear(e.target.value)} required />
    </div>
</div>

<div className="row mb-2">
    <div className="col-3">
    <label  className="form-label">Image URL</label>
</div>
    <div className="col-9">
    <input type="text"
    value={img}
    onChange={(e)=>setImg(e.target.value)}  required/>
    </div>
</div>


   <div className="modal-footer d-flex justify-content-center">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" onClick={handleSavebook}>Save Book</button>
      </div>
   </form>
        )}
      </div>
   

     
    </div>
  </div>
</div>
        

        </div>

        {loading ? (
        <p>Loading...</p>
      ) : (
       
        <div className="card-group g-2 p-2 mt-2" >


    

<div className="row ">
  {books.map((book, index) => (
    <div key={book._id} className="col-md-3"  style={{ width: '25rem' }}>
      <div className="card card-hover mb-4 p-2" >
      <h5 style={{ textAlign: 'left' }}>{index + 1} .</h5>

        <h4>{book.title}</h4>
        <p>
          <img
            src={book.img}
            alt=""
            style={{ width: '50%', height: 'auto' }}
          />
        </p>
        <div className="d-flex justify-content-center">
          <div className="p-2">
            <Link to={`/php/books/details/${book.id}`}>
              <BsFillInfoCircleFill size={25} color="black" />
            </Link>
          </div>
          <div className="p-2">
            <Link to={`/php/books/edit/${book.id}`}>
              <FaEdit size={25} color="black" />
            </Link>
          </div>
          <div className="p-2">
            <Link to={`/php/books/delete/${book.id}`}>
           <MdDelete size={25} color="red" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
// ========================




      )}

        
    </center>
  )
}

export default Home;