import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    alert(`default Text: ${text}`);
  }
  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }
  function submitForm(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{ backgroundColor: "red", padding: "15px" }}>
      <p
        onMouseOver={() => {
          console.log("on mouse Over");
        }}
      > Hello, {name}
      <div>
        child component

      </div>
      </p>

      <button
        onClick={() => {
          console.log("boton 1 pulsado");
        }}
      >
        boton 1
      </button>
      <button onClick={pressButton}>boton 2</button>
      <button
        onClick={() => {
          pressButtonParams("hola");
        }}
      >
        boton 3
      </button>

      <input
        placeholder="insert Text"
        onFocus={() => console.log("on Focus")}
        onChange={(e) => console.log("input changed: ", e.target.value)}
        onCopy={() => console.log("copied text from imput")}
        ref={messageRef}
      ></input>
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitForm}>
          <input ref={nameRef} placeholder="new name" />
          <button type="Submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
