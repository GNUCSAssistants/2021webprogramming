const menu = ["짜장면", "짬뽕", "탕수육"];

const changeFirstMenu = () => {
  const tempMenu = menu;
  tempMenu[0] = "우동";
};

changeFirstMenu();
console.log(menu); // 우동, 짬뽕, 탕수육
