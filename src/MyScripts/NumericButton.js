import React from "react";
import CalcLabel from "./CalcLabel";
import InputButton from "./InputButton";

export default function NumericButton(props) {
  return (
    <InputButton
      id={props.id}
      text={props.inputValue}
      className="numericButton"
      onclick={props.onclick}
      inputValue={props.inputValue}
    />
  );
}
