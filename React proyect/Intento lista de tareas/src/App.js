import "./App.css";
import React from "react";
import Father from "./components/container/father";
import TaskListComponent from "./components/container/task_list";
import LogitnForimik from "./components/pure/forms/logitnForimik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import TaskFormik from "./components/pure/forms/taskFormik";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <LogitnForimik></LogitnForimik> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Father></Father> */}
        {/* <RegisterFormik></RegisterFormik> */}
        <TaskFormik></TaskFormik>
      </header>
    </div>
  );
}

export default App;
