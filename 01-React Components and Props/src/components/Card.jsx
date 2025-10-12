// import "../styles/card.css"

const Card = ({ topic, duration }) => {
  return (
    <div className="card">
      <h3>{topic}</h3>
      <p
        style={{ backgroundColor: "red", width: "fit-content", padding: "5px" }}
      >
        {duration} Months
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
        voluptate dolorum voluptatibus placeat nulla minima assumenda tenetur.
        Pariatur natus, repellendus error sunt optio numquam eveniet maxime
        consectetur explicabo voluptates? Maiores magnam recusandae et? Et nam
        molestias voluptatum veritatis possimus ut expedita veniam omnis in nemo
        maiores optio atque soluta repellendus facere quae provident voluptate
        libero dolorum, voluptatibus, dolor mollitia!
      </p>
    </div>
  );
};

export default Card;

// function Card(prop) {
//     console.log(prop);

//   return (
//     <div className="card">
//       <h3>{prop.topic}</h3>
//       <p style={{backgroundColor:"blue",width:"fit-content"}}>{prop.duration} Months</p>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
//         voluptate dolorum voluptatibus placeat nulla minima assumenda tenetur.
//         Pariatur natus, repellendus error sunt optio numquam eveniet maxime
//         consectetur explicabo voluptates? Maiores magnam recusandae et? Et nam
//         molestias voluptatum veritatis possimus ut expedita veniam omnis in nemo
//         maiores optio atque soluta repellendus facere quae provident voluptate
//         libero dolorum, voluptatibus, dolor mollitia!
//       </p>
//     </div>
//   );
// }

// export default Card;
