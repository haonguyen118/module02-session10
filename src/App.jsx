import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./component/TodoForm";

function App() {
  return (
    <>
      <div className="h-[100vh] w-full flex items-center justify-center font-[Inter]">
        <TodoForm></TodoForm>
      </div>
    </>
  );
}

export default App;
