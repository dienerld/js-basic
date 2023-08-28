export const fibonacci = (n) => {
  // if (n < 2) return n;
  // return fibonacci(n - 1) + fibonacci(n - 2);

  // implementation itective
  if (n < 2) return n;
  let [a, b] = [0, 1];
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
