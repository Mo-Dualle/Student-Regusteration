import React from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Update from './Update';
import Create from './Create';

// import Main from './Main';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/dash' element={<Dashboard/>}/>
            <Route path='/sign' element={<SignUp/>}/>
            <Route path='/' element={<Login/>}/>  
            <Route path='/edit/:id' element={<Update/>}/>
            <Route path='/create' element={<Create/>}/>   
        </Routes>
    </BrowserRouter>
  );
}

export default App;


