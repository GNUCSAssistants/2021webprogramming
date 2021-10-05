const myInfo = {
    myName: "조교행님",
    age: 28,
    job: "cs 실습조교",
    department: "cs",
    address: "진주시 인사동",
    likes: ["코딩", "스타듀밸리", "오징어게임"]
}

myInfo.age = 18;
myInfo.likes[0] = "요리";
myInfo.likes.push("코코팜");

console.log(myInfo);