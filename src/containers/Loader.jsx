import React, { useEffect, useState } from "react";
//impoer Packages
import { LoadingOutlined } from "@ant-design/icons";
import { Progress } from "antd";

//import Styles
import "./containerStyles.scss";
export default function Loading() {
  const [spinValue, setSpinValue] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setSpinValue((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="noResultsPage mt-5 pt-5">
      <Progress
        type="circle"
        percent={`${Math.round(spinValue)}`}
        width={200}
      />
    </div>
  );
}
