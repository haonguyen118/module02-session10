import { Button } from "antd";
import React from "react";

const TodoFilter = () => {
  return (
    <div className="flex justify-around mb-4 border-[1px] p-4 rounded-[5px] border-gray-300 shadow-xl">
      <Button type="primary">Tất cả</Button>
      <Button style={{ backgroundColor: "aqua", color: "black" }}>
        Hoàn thành
      </Button>
      <Button style={{ backgroundColor: "orangered", color: "white" }}>
        Đang thực hiện
      </Button>
    </div>
  );
};

export default TodoFilter;
