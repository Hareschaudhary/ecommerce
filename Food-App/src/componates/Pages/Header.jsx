import React from 'react';
import NavBar from '../navigtionbar/NavBar';
import { Outlet } from 'react-router-dom';

const Header=()=>{

    return(
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}
export default Header;