import React from "react";
import CalcLabel from "./CalcLabel";
import InputButton from "./InputButton";

export default function OperatorButton(props) {
  let textSign = props.inputValue;
  if ("text" in props) {
    textSign = props.text;
  }
  return (
    <InputButton
      text={textSign}
      className="operatorButton"
      onclick={props.onclick}
      inputValue={props.inputValue}
      disabledValue={props.disabledValue}
    />
  );
}
