const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

console.log(daysOfWeek.length); // 7

//length는 문자열의 길이도 구할 수 있다.
const name1 = "조교행님";
console.log(name1.length); // 4

daysOfWeek[2] = "ㅋㅋㅋ";

console.log(daysOfWeek); // 수요일이 ㅋㅋㅋ 로 바뀐채로 출력됨

daysOfWeek.push("야호");

console.log(daysOfWeek); // 맨 뒤에 "야호" 추가된 배열 출력됨

daysOfWeek = ["짜장면", "짬뽕", "탕수육"];  // error