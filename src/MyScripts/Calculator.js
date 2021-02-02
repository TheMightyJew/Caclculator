import React, { useState } from "react";
import CalcScreen from "./CalcScreen";
import NumericButton from "./NumericButton";
import OperatorButton from "./OperatorButton";
import GenericButton from "./GenericButton";
import UtilityButton from "./UtilityButton";
import { calculate } from "./calcFunctions";

const DEFAULT_VALUE = 0;

export default function Calculator() {
    const [calcContent, setCalcContent] = useState(DEFAULT_VALUE);
    const [disabledValue, setDisabledValue] = useState(true);

    const numericClick = (inputValue) => {
        if (calcContent == DEFAULT_VALUE) {
            setCalcContent(inputValue);
        } else {
            setCalcContent(`${calcContent}${inputValue}`);
        }
        setDisabledValue(false);
    };

    const operatorClick = (inputValue) => {
        numericClick(inputValue);
        setDisabledValue(true);
    };
    const clearContent = () => setCalcContent(DEFAULT_VALUE);
    const calculateResult = () => setCalcContent(calculate(calcContent));
    return (
        <>
            <CalcScreen content={calcContent} />
            <div>
                <UtilityButton id="acButton" text="AC" onclick={clearContent} />
                <UtilityButton
                    id="calculateButton"
                    text="Calculate!"
                    onclick={calculateResult}
                    disabledValue={disabledValue}
                />
            </div>
            <div>
                <NumericButton inputValue={7} onclick={numericClick} />
                <NumericButton inputValue={8} onclick={numericClick} />
                <NumericButton inputValue={9} onclick={numericClick} />
                <OperatorButton
                    inputValue="/"
                    text="&divide;"
                    onclick={operatorClick}
                    disabledValue={disabledValue}
                />
            </div>
            <div>
                <NumericButton inputValue={4} onclick={numericClick} />
                <NumericButton inputValue={5} onclick={numericClick} />
                <NumericButton inputValue={6} onclick={numericClick} />
                <OperatorButton
                    inputValue="×"
                    text="x"
                    onclick={operatorClick}
                    disabledValue={disabledValue}
                />
            </div>
            <div>
                <NumericButton inputValue={1} onclick={numericClick} />
                <NumericButton inputValue={2} onclick={numericClick} />
                <NumericButton inputValue={3} onclick={numericClick} />
                <OperatorButton
                    inputValue="-"
                    onclick={operatorClick}
                    disabledValue={disabledValue}
                />
            </div>
            <div>
                <NumericButton
                    id="zeroButton"
                    inputValue={0}
                    onclick={numericClick}
                />
                <OperatorButton
                    inputValue="."
                    text="."
                    onclick={operatorClick}
                    disabledValue={disabledValue}
                />
                <OperatorButton
                    inputValue="+"
                    onclick={operatorClick}
                    disabledValue={disabledValue}
                />
            </div>
        </>
    );
}
