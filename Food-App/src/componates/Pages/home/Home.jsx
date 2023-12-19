import React from "react";
import Slider from "./Slider";
import Api from "./Api";

const Home = () => {
  return (
    <>
      <Slider />
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
      <Api />
      </div>
  
    </>
  );
};

export default Home;
