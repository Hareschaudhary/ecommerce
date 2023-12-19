import React, { useEffect, useState } from "react";
import {useFormik}  from "formik"
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Validationschema from "./Validationschema";
import { useContext } from "react";
import Usecontaxt from "../../../contaxtapi/Usecontaxt";
import { useNavigate } from "react-router-dom";

const initialValues={
name:"",
email:"",
password:"",
}
const Login = () => {
    const [emailvalue,setemailvalue]=useState(gattare())
    const {setlogin}=useContext(Usecontaxt)
   let gotohome =useNavigate()
  const {values,handleChange,handleSubmit,handleBlur,errors} =  useFormik({
    initialValues: initialValues,
    validationSchema:Validationschema,
    onSubmit: (values)=>{
        setemailvalue(values.email)
        gotohome("/")
    }
    })
    function gattare(){
        let a =localStorage.getItem("item")
        if(a){
            return(JSON.parse(localStorage.getItem("item")))
        }else{
            return[ ]
        }
     
    }
    // console.log(emailvalue)
    useEffect(()=>{
        localStorage.setItem("item",JSON.stringify(emailvalue))
        setlogin(emailvalue)
    },[emailvalue])
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
      <Card  color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name <span style={{color:"red"}}> {errors.name}</span>
            </Typography>
            <Input
              size="lg"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email <span style={{color:"red"}}>{errors.email}</span>
            </Typography>
            <Input
              size="lg"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password  <span style={{color:"red"}}>{errors.password}</span>
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button  type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
      </div>
    </>
  );
};

export default Login;
