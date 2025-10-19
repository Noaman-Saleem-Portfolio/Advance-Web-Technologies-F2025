import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value + 1);
  };

  const jumpByFive = () => {
    setValue((prev) => {
      return prev + 5;
    });
  };

  // Not recommended
  // let incBtn = document.querySelector("#inc");
  // incBtn.addEventListener("click", () => {
  //   console.log("button Clicked!");
  //   value = value + 1;
  //   console.log(value);
  // });

  return (
    <div>
      <h1 className="num">{value}</h1>
      <button onClick={increment} id="inc">
        +
      </button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <button onClick={jumpByFive}>+ 5</button>
    </div>
  );
}

export default App;
