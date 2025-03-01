const add = (a: string, b: string): string => {
  return parseFloat(a) + parseFloat(b) + "";
};

const subtract = (a: string, b: string): string => {
  return parseFloat(a) - parseFloat(b) + "";
};

const multiply = (a: string, b: string): string => {
  return parseFloat(a) * parseFloat(b) + "";
};

const divide = (a: string, b: string): string => {
  if (parseFloat(b) === 0) {
    return "Cannot divide by zero";
  }
  return parseFloat(a) / parseFloat(b) + "";
};

function calculate(a: string, b: string, operator: string): string {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return b;
  }
}

export default calculate;
