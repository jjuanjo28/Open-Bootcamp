import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un email valido")
    .required("ingrese un email"),
  password: Yup.string().required("Ingrese un password"),
});

const LogitnForimik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;

          return (
            <Form>
              <label htmlFor="email">email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              {errors.email && touched.email && (
                <div className="error">
                  <p style={{ color: "red" }}>{errors.email}</p>
                </div>
              )}
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Your Password"
                type="password"
              />
              {errors.password && touched.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
              <button type="submit">Login</button>
              {isSubmitting ? <p>Login your credentials</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LogitnForimik;
