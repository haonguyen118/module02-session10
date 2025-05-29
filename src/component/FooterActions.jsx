import { Button, Popconfirm } from "antd";
import axios from "axios";
import React from "react";

const FooterActions = ({ fetchData }) => {
  const handleDeleteAll = () => {
    axios.delete("http://localhost:3000/tasks").then(() => {
      setTasks([]);
    });
  };
  return (
    <div className="flex justify-between">
      <Button style={{ with: 100, backgroundColor: "orange", color: "white" }}>
        {" "}
        Xóa công việc hoàn thành
      </Button>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={handleDeleteAll}
        okText="Yes"
        cancelText="No"
      >
        <Button style={{ with: 100, backgroundColor: "red", color: "white" }}>
          {" "}
          Xóa tất cả công việc
        </Button>
      </Popconfirm>
    </div>
  );
};

export default FooterActions;
