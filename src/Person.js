import React from "react";
import "../Components/Person.css";

const person = (props) => {
  return (
    <div className="personstyle">
      <h2 onClick={props.click}>
        Hi! I am {props.name} of age {props.age}
      </h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
