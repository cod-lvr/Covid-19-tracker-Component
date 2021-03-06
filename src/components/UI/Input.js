import React from "react";

const Input = (props) => {
  return <input type={props.type} id={props.id}  className={props.className} ref={props.ref}/>;
};

export default Input;
