import React, { useEffect, useState } from "react";

const ExamRoom = () => {
  const [stdCount, setStdCount] = useState(0);
  useEffect(() => {
    console.log(`Banda ban jao. cheating not allowed!`);
  }, [stdCount]);
  return (
    <div>
      <h1>Exam Room</h1>
      <button onClick={() => setStdCount(stdCount + 1)}>
        New Student Entered
      </button>
    </div>
  );
};

export default ExamRoom;
