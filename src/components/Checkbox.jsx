import React from "react";
import styled from "styled-components";

const Input = styled.input`
  /* width: 100px; */
`;
const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <Input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default Checkbox;
