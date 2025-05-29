import React from "react";
import TodoItem from "./TodoItem";
import { Pencil, Trash2 } from "lucide-react";
import axios from "axios";
import { Input, Popconfirm } from "antd";

const TodoList = ({ tasks, fetchData }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
      fetchData();
    });
  };
  return (
    <>
      <div>
        {tasks &&
          tasks.map((task) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  width: 300,
                  alignItems: "center",
                  marginLeft: 20,
                  border: "1px solid grey",
                  marginBottom: 5,
                }}
              >
                <div>
                  <Input
                    type="checkbox"
                    style={{ width: 12, marginRight: 10 }}
                  />
                  <span>{task.taskname}</span>
                </div>
                <div>
                  <Pencil style={{ width: 20, color: "blue" }} />
                  <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={() => handleDelete(task.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    {" "}
                    <Trash2 style={{ width: 20, color: "orange" }} />
                  </Popconfirm>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
{
  /* // <TodoItem text="Quét nhà" completed={false} />
      // <TodoItem text="Giặt quần áo" completed={true} />
      // <TodoItem text="Nấu cơm" completed={false} />
    */
}

export default TodoList;
