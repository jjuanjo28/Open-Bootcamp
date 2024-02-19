import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/taskForm";
import TaskComponent from "../pure/task_component";

const TaskListComponent = () => {
 
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("task a cambiado");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("el componente se a desmontado");
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete this task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }
  function removeTask(task) {
    console.log("Delete this task:", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }
  function addTask(task) {
    console.log("Add this task:", task);
    setTasks([...tasks, task]);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={removeTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let taskTable;

  if (tasks.length > 0) {
    taskTable = <Table></Table>;
  } else {
    taskTable = (
      <div>
        <h3>No hay Tareas que mostrar</h3>
        <h4>Ingrese una nueva tarea</h4>
      </div>
    );
  }
  return (
    <div className="col-12">
      <div>
        <div className="card">
          <div className="card-header p-3">
            <h5 style={{ fontWeight: "bold", color: "blue" }}>Your Tasks:</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            {/* TODO: Add Loading Spinner!!! */}
            {loading ? <p>Loading Task...</p> : taskTable}
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
