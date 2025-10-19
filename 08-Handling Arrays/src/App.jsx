import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    age: null,
    email: "",
  });

  const [students, setStudents] = useState([
    { stdName: "Ali", stdAge: 34, stdEmail: "ali@gmail.com" },
  ]);

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

  const addStudent = () => {
    if (!formData.username || !formData.age || !formData.email) {
      return;
    }
    setStudents((prev) => {
      let newStudent = {
        stdName: formData.username,
        stdAge: formData.age,
        stdEmail: formData.email,
      };
      return [...prev, newStudent];
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
        return (
          <div className="card">
            <h1>{item.stdName}</h1>
            <h2 className={item.stdAge > 30 ? "bg-red" : ""}>{item.stdAge}</h2>
            <p>{item.stdEmail}</p>
          </div>
        );
      })}

      <button
        onClick={addStudent}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Add New Student
      </button>

      <button
        onClick={eraseAll}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Erase All Form Data
      </button>
    </div>
  );
}

export default App;
