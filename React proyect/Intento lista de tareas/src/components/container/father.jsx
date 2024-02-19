import React, { useState } from "react";
import Child from "../pure/child";

const Father = () => {
  const [name, setName] = useState("juanjo");

  function showMessage(text) {
    alert(`Messager recived: ${text}`);
  }
  function updateName(newName) {
    setName(newName);
  }
  return (
    <div
      style={{ padding: "30px", backgroundColor: "blue", borderRadius: "10px" }}
    >
      <p style={{ fontWeight: "bold", color: "white" }}>Father component</p>

      <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  );
};

export default Father;
