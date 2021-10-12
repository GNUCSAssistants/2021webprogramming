const isGoToWork = (day) => {
  if (
    day === "월" ||
    day === "화" ||
    day === "수" ||
    day === "목" ||
    day === "금"
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(isGoToWork("월")); // true
console.log(isGoToWork("금")); // true
console.log(isGoToWork("토")); // false
console.log(isGoToWork("일")); // false
