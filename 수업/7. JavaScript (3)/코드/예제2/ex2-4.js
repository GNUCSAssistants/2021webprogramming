const info = {
  name: "조교행님",
  age: 28,
};

const changeInfoAge = () => {
  tempInfo = info;
  tempInfo.age = 18;
};

changeInfoAge();
console.log(info); // { name: "조교행님", age: 18 }
