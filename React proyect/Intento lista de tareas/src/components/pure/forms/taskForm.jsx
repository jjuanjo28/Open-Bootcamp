import React, { useRef } from "react";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import Propstypes from "prop-types";
const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptioRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptioRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  const normalStyle = {
    color: "blue",
    fontWeight: "bold",
  };
  const blockingStyle = {
    color: "red",
    fontWeight: "bold",
  };
  const urgentStyle = {
    color: "yellow",
    fontWeight: "bold",
  };

  return (
    <form
      onSubmit={addTask}
      className="d-flex justify-content-center aling-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          placeholder="Nombre de tarea"
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
        />
        <input
          placeholder="Descripcion de tarea"
          ref={descriptioRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
        />
        <label htmlFor="selectLevel" className="sr-only"></label>
        <select ref={levelRef} id="selectLevel">
          <option style={normalStyle} value={LEVELS.NORMAL}>
            Normal
          </option>
          <option value={LEVELS.URGENT} style={urgentStyle}>
            Urgent
          </option>
          <option value={LEVELS.BLOCKING} style={blockingStyle}>
            Blocking
          </option>
        </select>
        <button type="submit" className="btn btn-success btn-lg ms-2">
          {length > 0 ? "Add new Task" : "Create your first Task"}
        </button>
      </div>
    </form>
  );
};
TaskForm.Propstypes = {
  add: Propstypes.func.isRequired,
  length: Propstypes.number.isRequired,
};
export default TaskForm;
