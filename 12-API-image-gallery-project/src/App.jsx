import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=5`
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let printUserData = <h3>Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {printUserData}
      </div>

      <button
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1);
            // setUserData([]);
          }
        }}
      >
        Prev
      </button>
      <h4>Page {index}</h4>
      <button
        onClick={() => {
          // setUserData([]);

          setIndex(index + 1);
        }}
      >
        Next
      </button>
    </>
  );
};

export default App;
