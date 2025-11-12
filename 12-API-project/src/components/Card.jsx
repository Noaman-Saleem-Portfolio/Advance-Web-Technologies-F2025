import React from "react";

const Card = (props) => {
  return (
    <>
      <a href={props.elem.url} target="_blank">
        <div>
          <img style={{ width: "50px" }} src={props.elem.download_url} alt="" />
        </div>
        <h2>{props.elem.author}</h2>
      </a>
    </>
  );
};

export default Card;
