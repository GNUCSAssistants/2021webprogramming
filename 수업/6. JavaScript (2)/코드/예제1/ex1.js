// && 를 || 로 바꿔보고, myName과 yourName 의 값도 바꿔가면서 확인해보자.
const myName = "로미오";
const yourName = "줄리엣";
// if (myName === "로미오" || yourName === "줄리엣") {
//   console.log("|| 실행");
// } else {
//     console.log("error!");
// }
myName === "로미오" || yourName === "줄리엣" ? console.log("||실행") : console.log("error!");