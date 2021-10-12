const myInfo = {
  id: "assistant0603",
  password: "ohmypassword",
};

const login = (id, password) => {
  if (id === myInfo.id) {
    if (password === myInfo.password) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const loginSuccess = login("assistant0603", "ohmypassword");
if (loginSuccess === true) {
  console.log(`환영합니다, ${myInfo.id}님`);
} else {
  console.log("로그인 실패!");
}
