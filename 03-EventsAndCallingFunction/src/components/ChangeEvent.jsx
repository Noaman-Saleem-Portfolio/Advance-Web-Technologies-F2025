import React from "react";

const ChangeEvent = () => {

  const handleChange = (elem) => {
    console.log("User is typing.... = " + elem.target.value);
  };

  return (
    <div>
      <input
        onChange={(event) => {
          //   console.log(event.target.value);

          handleChange(event);
        }}
        type="text"
        placeholder="Type text Here"
      />
    </div>
  );
};

export default ChangeEvent;
