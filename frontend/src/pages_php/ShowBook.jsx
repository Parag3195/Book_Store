import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { IoMdArrowRoundBack} from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { php_BASE_URL } from '../util';

function ShowBook() {

const [book,setBook]=useState({});
const [loading,setLoading]=useState(false);
const { id }=useParams();
const navigate = useNavigate();

useEffect(()=>{

  
  setLoading(true);
  axios.get(`${php_BASE_URL}/books/${id}`)
  .then((response)=>{
    setBook(response.data);
    setLoading(false);
  })
  .catch((err)=>{
    console.log(err);
    setLoading(false);

  });
},[])
const backtohome=()=>{
  navigate('/php');

}

  return (
    <div>
     
     <Link to={`/php`}> 
     <IoMdArrowRoundBack color='black' size={50}/>
      </Link>
{loading ?("  Loading... Please Wait."):
(
  <div className="card p-2">
  <div className="row">
  
    <div className="col-md-8">
      <div className="card-body">
      <div className="card p-2">
  <div className="row">
    <div className="col-md-4">
      <img
        src={book.img}
        className="card-img-top"
        alt="..."
        style={{ width: '100%', height: '100%' }}
      />
    </div>
    <div className="col-md-8">
      <table className="table ">
        <tbody>
          <tr>
            <th>Book Id:</th>
            <td>{book.id}</td>
          </tr>
          <tr>
            <th>Title:</th>
            <td>{book.title}</td>
          </tr>
          <tr>
            <th>Author:</th>
            <td>{book.author}</td>
          </tr>
          <tr>
            <th>Publish Year:</th>
            <td>{book.publishYear}</td>
          </tr>
          <tr>
            <td colSpan={2}>

    <button className='btn btn-success' onClick={backtohome}>Home</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

      </div>
    </div>

  </div>
</div>


)}
     

    </div>
  )
}

export default ShowBook