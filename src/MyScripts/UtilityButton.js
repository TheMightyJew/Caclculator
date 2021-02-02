import React from "react";
import GenericButton from "./GenericButton";

export default function UtilityButton(props) {
  return (
    <GenericButton
      id={props.id}
      text={props.text}
      className={`utilityButton ${props.className}`}
      onclick={props.onclick}
      disabledValue={props.disabledValue}
    />
  );
}
