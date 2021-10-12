const a = 1;
const b = 2;

const showResult = (a, b) => {
  a = 3;
  b = 4;
  return [a, b];
};

const [resultA, resultB] = showResult(a, b);

console.log(a, b); // 1, 2
console.log(resultA, resultB); // 3, 4
