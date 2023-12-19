import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import Usecontaxt from "../../../contaxtapi/Usecontaxt";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const { data } = useContext(Usecontaxt);
  const { setaddcard } = useContext(Usecontaxt);
  const { addcard } = useContext(Usecontaxt);
  const { setmaincard } = useContext(Usecontaxt);
  const { maincard } = useContext(Usecontaxt);
 const navigtion=useNavigate()

//   console.log(data);
  function add(id){
  let addcards =data.filter((Element,key)=>{
    return id===key
  })
  addcards.map((e)=>{
  setaddcard([...addcard, {img:e.images,title:e.title,price:e.price,description:e.description}])
  })
  }
function cardclick(id){
   let maincar=data.filter((a,key)=>{
    return id===key
   })
   console.log(maincar)
   maincar.map((e)=>{
    setmaincard([ {img:e.images,title:e.title,price:e.price,description:e.description,rating:e.rating,stock:e.stock}])
   })
   navigtion("maincard")
}
// console.log(data)
  return (
    <>
      {data.map((car, id) => {
        return (
          
          <Card  className="mt-3 w-96" key={id}>
            <div onClick={()=>cardclick(id)}>
            <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={car.images[0]}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {car.brand}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                {car.price}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
              {car.description}
              </Typography>
            </CardBody>
            </div>
            <CardFooter className="pt-0">
              <Button
              onClick={()=>add(id)}
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
export default Cards;
