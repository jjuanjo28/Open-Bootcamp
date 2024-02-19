import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import "../../styles/task.css";
const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Create Task");

    return () => {
      console.log(`task: ${task.name} is going to unmount`);
    };
  }, [task]);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  function completedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-on task-action"
          style={{ color: "green", fontWeight: "bold" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-off task-action"
          style={{ color: "red", fontWeight: "bold" }}
        ></i>
      );
    }
  }
  const taskCompleted = {
    color: "gray",
    textDecoration: "line-through",
  };
  const taskPending = {
    fontWeight: "bold",
    color: "red",
  };

  return (
    <tr
      className="fw-normal "
      style={task.completed ? taskCompleted : taskPending}
    >
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="aling-middle">
        <span>{task.description}</span>
      </td>
      <td className="aling-middle">{taskLevelBadge()}</td>
      <td className="aling-middle">
        {completedIcon()}
        <i
          onClick={() => remove(task)}
          className="bi-trash task-action"
          style={{ color: "tomato" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
