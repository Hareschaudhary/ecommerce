import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "@material-tailwind/react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import Usecontaxt from "../../contaxtapi/Usecontaxt";

const AddCard = () => {
  const navigthion = useNavigate();
  const {addcard} =useContext(Usecontaxt)
  const {setaddcard} =useContext(Usecontaxt)
  function back() {
    navigthion(-1);
  }
 
  function remove(id){
    let a=addcard.filter((e,key)=>{
      return id !==key
    })
    setaddcard(a)
  }
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}> 
    {
     addcard.map((a,id)=>{
     return(
        <Card className="w-96" key={id}>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={a.img[0]}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
               {a.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {a.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
          {a.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
          onClick={()=>remove(id)}
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Remove to Cart
          </Button>
        </CardFooter>
      </Card>
     )
     })
    }
    </div>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",position:"absolute",bottom:"10px"}}>
    <Button onClick={back}>back</Button>
       </div>

 
    </>
  );
};
export default AddCard;
