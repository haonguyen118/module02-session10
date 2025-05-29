import { Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";

const AddTodo = ({ fetchData }) => {
  const [inputTask, setInputTask] = useState("");
  const handleChangeAdd = (e) => {
    setInputTask(e.target.value);
  };
  const handleAdd = () => {
    axios
      .post("http://localhost:3000/tasks", { taskname: inputTask })
      .then(() => {
        fetchData();
      });
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Nhập tên công việc"
        style={{ width: 300, height: 40 }}
        onChange={handleChangeAdd}
      />
      <br />
      <br />
      <Button type="primary" onClick={handleAdd} style={{ width: 300 }}>
        Thêm công việc
      </Button>
    </div>
  );
};

export default AddTodo;
