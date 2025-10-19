import { useState } from "react";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    console.log("form submitted!");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" placeholder="Enter Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
