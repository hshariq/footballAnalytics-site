import React from "react";
import { FaBorderNone } from "react-icons/fa";
import { PieChart, Pie, Tooltip, Label } from "recharts";

const Donut = () => {
  const data = [
    { name: "Progress", value: 60, fill: "#F9104F" },
    { name: "Remaining", value: 40, fill: "#26020C" },
  ];

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
      }}
    >
      <PieChart width={210} height={210}>
        <Tooltip />
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          outerRadius={100}
          innerRadius={70}
        >
          <Label
            value="PROGRESS"
            position="center"
            style={{ fontSize: "20px", fontWeight: "bold", fill: "white" }}
          />
        </Pie>
      </PieChart>
    </div>
  );
};

export default Donut;
