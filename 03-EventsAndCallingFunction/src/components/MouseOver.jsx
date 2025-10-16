import React from "react";

const MouseOver = () => {
  const muFunc = () => {
    console.log("Mouse In entered");
  };

  const muFunc1 = () => {
    console.log("Mouse is moving");
  };

  return (
    <div>
      <div
        onMouseEnter={muFunc}
        onMouseLeave={() => {
          console.log("Mouse is leaving");
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}
      ></div>

      <div
        onMouseMove={muFunc1}
        style={{ width: "300px", height: "300px", backgroundColor: "pink" }}
      ></div>
    </div>
  );
};

export default MouseOver;
