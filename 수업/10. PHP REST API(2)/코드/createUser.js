const createUser = async () => {
  const nameInput = document.querySelector(".nameInput").value;
  const addressInput = document.querySelector(".addressInput").value;
  if (nameInput && addressInput) {
    try {
      const response = await axios.post("./php/createUser.php", {
        nameInput: nameInput,
        addressInput: addressInput,
      });
      if (response.data) {
        console.log(response.data);
      } else {
        console.log("입력 실패");
      }
    } catch (error) {
      console.log(error);
    }
  }
};
