function calculateExpression(firstNumber, secondNumber, operator) {
  let res;
  switch (operator) {
    case "+":
      res = firstNumber + secondNumber;
      break;
    case "-":
      res = firstNumber - secondNumber;
      break;
    case "×":
      res = firstNumber * secondNumber;
      break;
    case "/":
      res = firstNumber / secondNumber;
      break;
  }
  return res;
}

function calculateIteratively(symbols) {
  let iterateAll = true;
  while (symbols.length !== 1) {
    let flag = false;
    for (let i = 0; i < symbols.length; i++) {
      if (!iterateAll && (symbols[i] === "+" || symbols[i] === "-")) {
        let res = calculateExpression(
          symbols[i - 1],
          symbols[i + 1],
          symbols[i]
        );
        symbols[i - 1] = res;
        symbols.splice(i, 1);
        symbols.splice(i, 1);
        break;
      }
      if (symbols[i] === "/" || symbols[i] === "×") {
        let res = calculateExpression(
          symbols[i - 1],
          symbols[i + 1],
          symbols[i]
        );
        symbols[i - 1] = res;
        symbols.splice(i, 1);
        symbols.splice(i, 1);
        flag = true;
        break;
      }
    }
    iterateAll = flag;
  }
  return symbols[0];
}

export function calculate(calcContent) {
  let stringHolder = "";
  let parsedSymbols = [];
  try {
    for (let char of `${calcContent}`) {
      if ((char >= "0" && char <= "9") || char === ".") {
        stringHolder += char;
      } else {
        parsedSymbols.push(parseFloat(stringHolder));
        parsedSymbols.push(char);
        stringHolder = "";
      }
    }
    parsedSymbols.push(parseFloat(stringHolder));
    const finalResult = calculateIteratively(parsedSymbols);
    return finalResult;
  } catch {
    return "Bad Input";
  }
}
