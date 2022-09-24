import React from "react";
import "../Components/Person.css";
import Radium from "radium";

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="personstyle" style={style}>
      <p onClick={props.click}>
        Hi! I am {props.name} of age {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default Radium(person);
