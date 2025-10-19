import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`form submitted by ...... ${name}`);
    setName("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          onChange={(e) => {
            // console.log(e.target.value);
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter Name"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
