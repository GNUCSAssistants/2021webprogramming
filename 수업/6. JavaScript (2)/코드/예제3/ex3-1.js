const myInfo = {
    name: "조교행님",
    age: 28,
    isGrilfriend: true,
    family: [
        "아빠",
        "엄마",
        "멍멍이"
    ]
};

console.log(myInfo.family[0]); // 아빠
console.log(myInfo.job);  // undefined
myInfo.isGrilfriend = false;
console.log(myInfo);    // isGrilfriend 가 false 로 바뀜
myInfo = {
    name: "Jony",
    age: 16
}   // error