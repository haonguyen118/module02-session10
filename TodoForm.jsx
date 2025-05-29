import React, { useEffect, useState } from "react";
import TodoFilter from "./TodoFilter";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FooterActions from "./FooterActions";
import axios from "axios";
const TodoForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState();
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setIsLoading(true);
    setTasks(response.data);

    console.log(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center w-full">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Quản lý công việc
        </h1>
        <AddTodo fetchData={fetchData} />
        <br />
        <TodoFilter />
        <br />
        <TodoList tasks={tasks} fetchData={fetchData} />
        <br />
        <FooterActions fetchData={{ fetchData }} />
      </div>
    </div>
  );
};

export default TodoForm;
