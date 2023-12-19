import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Pages/Header';
import Home from "../Pages/Home/Home"
import About from "../Pages/About"
import AddCard from '../Pages/AddCard';
import Maincards from '../Pages/Maincard';
import Login from '../Pages/Form/Login';
const Routing =()=>{

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='card' element={<AddCard/>}/>
                <Route path='maincard' element={<Maincards/>}/>
            </Route>
          
           
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Routing