export function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
  // implementation iterative
  // let result = 1;
  // for (let i = 2; i <= n; i++) {
  //   result *= i;
  // }
  // return result;
}

export function calculator(n1, n2, operator) {
  if (isNaN(n1) || isNaN(n2)) return "error";
  if (n2 == 0 && operator === "/") return "error";

  if (operator === "+") {
    return n1 + n2;
  }
  if (operator === "-") {
    return n1 - n2;
  }
  if (operator === "*") {
    return n1 * n2;
  }
  if (operator === "/") {
    return n1 / n2;
  }
}
