import React, { useState } from "react";
import { useContext } from "react";
import Usecontaxt from "../../contaxtapi/Usecontaxt";
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  ButtonGroup,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Maincards = () => {
  const { maincard } = useContext(Usecontaxt);
  const loginpage =useNavigate()
  function gotologin(){
    loginpage("/login")
  }
  return (
    <>
      {maincard.map((e, id) => {
        return (
          <Card className="w-[100%] h-[100vh]  flex-row" key={id}>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              {/* ************************** */}
              <Carousel className="rounded-xl">
                <img
                  src={e.img[0]}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src={e.img[1]}
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src={e.img[2]}
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
                <img
                  src={e.img[3]}
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
                <img
                  src={e.img[4]}
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
              {/* ************************** */}
            </CardHeader>
            <CardBody className="w-full">
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                 {e.title}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  Price $ {e.price}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {e.description}
              </Typography>
              <div>
                <p><span>rating</span> {e.rating}</p>
              </div>
              <div>
                <p><span>stock :</span>{e.stock}</p>
              </div>
              <CardFooter className="pt-0  ">
                <ButtonGroup >
                  <Button className="sm:w-[100%] md:w-[50%] ">Bye</Button>
                  <Button className="sm:w-[100%] md:w-[50%]  ">Add To Card</Button>
                </ButtonGroup>
                <ButtonGroup >
                  <Button onClick={gotologin} className="w-[100%] mt-3">Login</Button>
                </ButtonGroup>
              </CardFooter>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};
export default Maincards;
