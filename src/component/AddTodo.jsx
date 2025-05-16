import { Button, Input } from "antd";
import React from "react";

const AddTodo = () => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        style={{ width: 200 }}
      />
      <Button type="primary">Thêm công việc</Button>
    </div>
  );
};

export default AddTodo;
