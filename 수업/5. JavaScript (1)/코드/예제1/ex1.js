console.log(typeof 0);      // number
console.log(typeof "0");    // string
console.log(0 == "0");      // true
console.log(0 === "0");     // false
console.log(typeof "true"); // string
console.log(typeof true);   // boolean

// const a = david;     // error. david라는 변수가 없기 때문

const myName = "조교행님";
const age = 28;
console.log(myName + "은 " + age + "살이다.");
console.log(`
    이름: ${myName}
    나이: ${age}
`);