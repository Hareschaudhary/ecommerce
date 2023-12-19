import React from 'react';
import * as Yup from "yup"
const Validationschema=Yup.object({
name: Yup.string().min(2).max(20).required("enter your name"),
email: Yup.string().email().required("enter your email"),
password: Yup.string().min(5).required("enter your password")
})

export default Validationschema