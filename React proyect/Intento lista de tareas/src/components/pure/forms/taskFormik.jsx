import React from "react";
import { User } from "../../../models/user.class";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {LEVELS} from "../../../models/levels.enum"


import { Task } from "../../../models/task.class";

const TaskFormik = () => {
    const task = new Task()

    const initialValues = {
        name : "",
        description : "",
        completed : false,
        level : LEVELS.NORMAL,
    }
    const taskSchemas = Yup.object().shape({
        name: Yup.string().required("name is required"),
        description : Yup.string().required("description is required")
       })
    const submit = (values) => {
        alert("new task created");
      };
    return (
        <div>
        <h4>Add Task Formik</h4>
        <Formik
            initialValues={initialValues}
            validationSchema={taskSchemas}
            onSubmit={async (values) => {
            console.log(values)
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            }}>
             {({ values, errors, isSubmitting, touched, handleChange, handleBlur }) => (
            
            <Form>
             <label htmlFor="name">Name</label>
              <Field
              id="name"
              type="text"
              name="name"
              placeholder="Ingrese el nombre de tarea"
              />
                {errors.name && touched.name && (
                <ErrorMessage name="name" component="div"></ErrorMessage>
             )}
              
            <label htmlFor="description">Descripcion de tarea</label>
            <Field
            id="description"
            type="text"
            name="description"
            placeholder="Ingrese la descripcion de la tarea"
            />
            {errors.description && touched.description && (
                <ErrorMessage name="description" component="div"></ErrorMessage>
             )}  
            
            <label htmlFor="level">nivel de tarea</label>
            <Field as="select" name="level">

             <option value={LEVELS.NORMAL}>normal</option>

             <option value={LEVELS.URGENT}>urgent</option>

             <option value={LEVELS.BLOCKING}>blocking</option>

           </Field>
           <div>
           <button type="submit">Add new Task</button>
            {isSubmitting ? (<p>new task is created</p>) : null}
           </div>
            </Form>
            )}
            </Formik>
            
        </div>
    );
}

export default TaskFormik;


