import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Courses = () => {
  const [selectedOption, setSelectedOption] = useState("No Course Selected");
  let navigate = useNavigate();

  // Event handler
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Selected:", event.target.value);
  };

  
  const goToDetailPage = () => {
    navigate(`/courses/${selectedOption}`)
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>Courses</h1>

      <h3>Select an option:</h3>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="No Course Selected">-- Choose an option --</option>
        <option value="ReactJS">ReactJS</option>
        <option value="NodeJS">NodeJS</option>
        <option value="API Development">API Development</option>
      </select>
      <br />
      <br />
      <button onClick={goToDetailPage}>Go to Selected Course Detail Page</button>
    </div>
  );
};

export default Courses;
