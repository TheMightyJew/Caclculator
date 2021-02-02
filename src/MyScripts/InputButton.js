import React from "react";
import GenericButton from "./GenericButton";

export default function InputButton(props) {
  return (
    <GenericButton
      id={props.id}
      text={props.text}
      className={`inputButton ${props.className}`}
      onclick={props.onclick}
      inputValue={props.inputValue}
      disabledValue={props.disabledValue}
    />
  );
}
