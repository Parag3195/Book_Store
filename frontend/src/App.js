import './App.css';
import { Link, Route , Routes} from 'react-router-dom';
import Home_Node from './pages_node/Home';
import CreateBook_Node from './pages_node/CreateBook';
import DeleteBook_Node from './pages_node/DeleteBook';
import EditBook_Node from './pages_node/EditBook';
import ShowBook_Node from './pages_node/ShowBook';

import Home from './pages_php/Home';
import CreateBook from './pages_php/CreateBook';
import DeleteBook from './pages_php/DeleteBook';
import EditBook from './pages_php/EditBook';
import ShowBook from './pages_php/ShowBook';

function App() {
  return (<>
    <div className="button-container">
    
         
    <Link to={'/node'}> <button className="styled-button">MongoDB </button></Link> 
    <Link to={'/php'}> <button className="styled-button"> PHP </button></Link> 
            
         
      </div>

   <Routes>
    <Route path='/node' element={<Home_Node/>}/>
    <Route path='/node/books/create' element={<CreateBook_Node/>}/>
    <Route path='/node/books/delete/:id' element={<DeleteBook_Node/>}/>
    <Route path='/node/books/edit/:id' element={<EditBook_Node/>}/>
    <Route path='/node/books/details/:id' element={<ShowBook_Node/>}/>


    <Route path='/php' element={<Home/>}/>
    <Route path='/php/books/create' element={<CreateBook/>}/>
    <Route path='/php/books/delete/:id' element={<DeleteBook/>}/>
    <Route path='/php/books/edit/:id' element={<EditBook/>}/>
    <Route path='/php/books/details/:id' element={<ShowBook/>}/>
  
   </Routes>
   </>
  );
}

export default App;
