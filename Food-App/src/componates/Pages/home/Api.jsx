import { useContext } from "react";
import Cards from "./Card"
import React, { useEffect, useState } from 'react';
import Usecontaxt from "../../../contaxtapi/Usecontaxt";

const Api =()=>{
    // const[apidata,setapidata]=useState([])
    const {setdata}=useContext(Usecontaxt)

    const api="https://dummyjson.com/products"
    const reaspons = async (url)=>{
       try {
        let res =await fetch(url)
        let data =await res.json()
        setdata(data.products)
       } catch (error) {
        console.log(error)
       }
    }
   useEffect(()=>{
    reaspons(api)
   },[])

    return(
        <>
      <Cards />
        </>
    )
}
export default Api