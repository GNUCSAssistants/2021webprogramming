const getAllUser = async () => {
  try {
    const response = await axios.get("./php/getAllUser.php"); // 추후 수정
    if (response.data) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const getUserByID = async () => {
  const nameInput = document.querySelector(".nameInput").value;
  if (nameInput) {
    try {
      const response = await axios.post("./php/getUserByID.php", {
        nameInput: nameInput,
      }); // 추후 수정
      if (response.data) {
        console.log(response.data);
      } else {
        console.log("그런 이름 없습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  }
};
