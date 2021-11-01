const getAllUser = async () => {
  try {
    const response = await axios.get("./php/getAllUser.php");
    if (response.data) {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAddressByName = async () => {
  const nameInput = document.querySelector(".nameInput").value;
  if (nameInput) {
    try {
      const response = await axios.post("./php/getAddressByName.php", {
        nameInput: nameInput,
      });
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
