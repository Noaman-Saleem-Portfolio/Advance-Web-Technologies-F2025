import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    age: null,
    email: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    console.log(e.target.name);
    const { name, value } = e.target; // Dynamically get the property name and value from the input

    // setFormData(prev => ({...prev,[name]:value}))
    setFormData((prev) => {
      return {
        ...prev, // Copy all existing properties from the previous state
        [name]: value, // Dynamically update the property identified by 'name' with the new 'value'
      };
    });
  };

  const eraseAll = () => {
    setFormData({
      username: "",
      age: null,
      email: "",
    });
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            // console.log(e.target.value);
            handleChange(e);
          }}
          type="text"
          name="username"
          placeholder="Enter Name"
          value={formData.username}
        />

        <input
          onChange={(e) => {
            // console.log(e.target.value);
            handleChange(e);
          }}
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age || ""}
        />

        <input
          onChange={(e) => {
            // console.log(e.target.value);
            handleChange(e);
          }}
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
        />
      </form>
      {students.map((item, idx) => {
        return <div className="card">hello</div>;
      })}
      <h1>Name : {formData.username}</h1>
      <h1>Age : {formData.age}</h1>
      <p>Email: {formData.email}</p>

      <button onClick={eraseAll} style={{ backgroundColor: "red" }}>
        Erase All Form Data
      </button>
    </div>
  );
}

export default App;
