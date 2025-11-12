import axios from "axios";
import { useState } from "react";

const App = () => {
  const [picData, setPicData] = useState([]);

  const getData = async () => {
    // Get data using fetch() function ---------------------
    // ************************ promise is returned *****************
    // let response = fetch("https://picsum.photos/v2/list");
    // console.log(response);
    /////////////////////////////////////////////////
    // ************************* use await to handle promise *********************
    // let response = await fetch("https://picsum.photos/v2/list");
    // console.log(response);
    // let data = await response.json();
    // console.log(data);
    ///////////////////////////////////////////////////
    // Using Axios to fetch data ----------------------------------
    let response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);

    setPicData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data from API</button>

      <div>
        {picData.map((item, idx) => {
          return (
            <div>
              <h2>{item.author}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
