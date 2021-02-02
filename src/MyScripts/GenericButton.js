import React from "react";
import CalcLabel from "./CalcLabel";

export default function GenericButton(props) {
    let disabledValue;
    if ("disabledValue" in props) {
        disabledValue = props.disabledValue;
    } else {
        disabledValue = false;
    }
    if ("inputValue" in props) {
        return (
            <button
                id={props.id}
                onClick={() => props.onclick(props.inputValue)}
                className={`genericButton ${props.className}`}
                disabled={disabledValue}
            >
                <CalcLabel text={props.text} />
            </button>
        );
    }
    return (
        <button
            id={props.id}
            onClick={() => props.onclick()}
            className={`genericButton ${props.className}`}
            disabled={disabledValue}
        >
            <CalcLabel text={props.text} />
        </button>
    );
}
