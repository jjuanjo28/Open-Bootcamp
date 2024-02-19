import React from "react";
import { User } from "../../../models/user.class";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .required("username is required")
      .min(2, "Too Short!"),
    email: Yup.string()
      .required("email es requerido")
      .email("invalid Email"),
      password: Yup.string()
      .required("password is required")
      .min(2, "to short"),
      confirm: Yup.string()
      .when("password", {
          is: (value) => (value && value.length > 0 ? true : false),
          then: Yup.string()
          .oneOf([Yup.ref("password")], "el password es diferente")
          .required("confirm the password"),
      role: Yup.string()
            .oneOf([ROLES.USER, ROLES.ADMIN], "you must select a Role: User / Admin")
            .required("ROLE is required"),
    }),
  });

  const submit = (values) => {
    alert("register user");
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
            console.log(values)
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        
        }}
      >
        {({ values, errors, isSubmitting, touched, handleChange, handleBlur }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="Ingrese su nombre"
            />
            {errors.username && touched.username && (
                <ErrorMessage name="username" component="div"></ErrorMessage>
             )}

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="Ingrese su email"
            />
            {errors.email && touched.email && (
                <ErrorMessage name="email" component="div"></ErrorMessage>
             )}
           
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="Your Password"
              type="password"
            />
            {errors.password && touched.password && (
                <ErrorMessage name="password" component="div"></ErrorMessage>
             )}
              

            <label htmlFor="confirm">Confirm</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="confirm your Password"
              type="password"
            />
             {errors.confirm && touched.confirm && (
                <ErrorMessage name="confirm" component="div"></ErrorMessage>
             )}
              
        
            <button type="submit">Register Account</button>
            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default RegisterFormik;

