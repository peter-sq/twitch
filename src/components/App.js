import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import Header from './Header';




const App = () => {
  return (
    <div className='ui component'>
     
 
      <BrowserRouter>
      <div>
      <Header/>
            <Routes>
          <Route path = '/' element = { <StreamList/> }></Route> 
          <Route path = '/streams/new' element = { <StreamCreate/> }></Route> 
          <Route path = '/streams/edit' element = { <StreamEdit/> }></Route> 
          <Route path = '/streams/delete' element = { <StreamDelete/> }></Route> 
          <Route path = '/streams/show' element = { <StreamShow/> }></Route> 
          </Routes>
          </div>
      </BrowserRouter>
      </div>
  ); 
};

export default App;
