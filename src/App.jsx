import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./component/TodoForm";

function App() {
  return (
    <>
      <div
        style={{ border: "1px solid black", width: 400, textAlign: "center" }}
      >
        <TodoForm></TodoForm>
      </div>
    </>
  );
}

export default App;
