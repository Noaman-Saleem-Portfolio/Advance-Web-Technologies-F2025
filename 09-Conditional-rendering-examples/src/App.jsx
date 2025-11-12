import React from "react";

const App = () => {
  let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // assigning an element to a variable
  let myelement = <h1>Hello</h1>;
  let isLogin = true;
  return (
    <div>
      <h1>{marks}</h1>
      {myelement}

      {/* Conditional rendering */}
      {isLogin && <h3>Welcom Buddy</h3>}
    </div>
  );
};

export default App;
