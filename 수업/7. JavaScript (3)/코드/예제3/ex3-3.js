const isOKtoDrink = (age) => {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
};

console.log(isOKtoDrink(24)); // true
console.log(isOKtoDrink(19)); // true
console.log(isOKtoDrink(18)); // false
