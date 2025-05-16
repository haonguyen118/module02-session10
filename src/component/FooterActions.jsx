import { Button } from "antd";
import React from "react";

const FooterActions = () => {
  return (
    <div className="flex justify-between">
      <Button style={{ with: 100 }}> Xóa công việc hoàn thành</Button>
      <Button style={{ with: 100 }}> Xóa tất cả công việc</Button>
    </div>
  );
};

export default FooterActions;
