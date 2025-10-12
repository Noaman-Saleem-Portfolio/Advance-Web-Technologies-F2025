// import "../styles/card.css"

const Card = ({ name, exp, qualification, img }) => {
  return (
    <div className="card">
      <img src={img} alt="faculty-image" />
      <h3>{name}</h3>
      <p>{exp} Years of Experience</p>
      <p>Qualification : {qualification}</p>
      <button>More Info</button>
    </div>
  );
};

export default Card;
