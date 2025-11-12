import React from "react";

const Card = (props) => {
  return (
    <div style={{ width: "300px" }}>
      <a href={props.elem.url} target="_blank">
        <div>
          <img style={{ width: "100%" }} src={props.elem.download_url} alt="" />
        </div>
        <h2>{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
