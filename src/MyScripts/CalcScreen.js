import React from "react";

export default function CalcScreen(props) {
  return (
    <div className="calcScreen">
      <span className="calcContent">{props.content}</span>
    </div>
  );
}
