import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';
import * as Yup from 'yup';


const RegisterSchema = Yup.object().shape({

    firstName: Yup.string()
 
      .min(2, 'Too Short!')
 
      .max(50, 'Too Long!')
 
      .required('Required'),
 
    lastName: Yup.string()
 
      .min(2, 'Too Short!')
 
      .max(50, 'Too Long!')
 
      .required('Required'),
 
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required("required"),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "LOS PASSWORD SON DIFERENTES")
    .required("Required"),
    
  });



const RegisterPage = ({verObjeto,modificarObjeto}) => {
  
function verificaDato(nUser) {
 
  
}

    return (
        <div>
        <Button onClick={()=>console.table(verObjeto)}>ver array</Button>
            <h1>Register Page</h1>
            <Formik
        initialValues={{
        firstName: "",
        lastName:"",
        email: '',
        password: "",
      
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        let nuevoUser = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          tasks:[],
          state:true,
        }
        console.log(nuevoUser)
        if(verObjeto.some((e)=> e.email == nuevoUser.email )){
          return alert("El User esta duplicado no puede crearlo")
        } else {
        modificarObjeto([...verObjeto,nuevoUser])
        }
        document.getElementById("myForm").reset()
        console.table(verObjeto)
      }}
    >
    {({ errors, touched }) => (
      <Form id='myForm'>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        {errors.firstName && touched.firstName ? (

<div>{errors.firstName}</div>

) : null}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        {errors.lastName && touched.lastName ? (

<div>{errors.lastName}</div>

) : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
      </div>

        <label htmlFor="password">Your Pass</label>
        <Field type="password" id="password" name="password"  />
        <label htmlFor="confirmPassword">Reingrese su pass</label>
        <Field type="password" id="confirmPassword" name="confirmPassword"  />
        {errors.confirmPassword && touched.confirmPassword ? (

<div style={{color:"red"}} >{errors.confirmPassword}</div>

) : null}
        
        <div>
        <Button style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        margin: 10,
        color: 'white'        
    }} type="submit">Submit</Button>
        </div>
      </Form>
    )}
    </Formik>
        </div>
    );
}

export default RegisterPage;
