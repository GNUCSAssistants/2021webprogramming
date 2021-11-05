let datas;
let index = 0;

const getFirstOrder = () => {
  document.querySelector(".menu_name").textContent = datas[0].menu_name;
  document.querySelector(".quantity").textContent = datas[0].quantity;
  document.querySelector(".address").textContent = datas[0].address;
  document.querySelector(".what_time").textContent = datas[0].what_time;
  document.querySelector(".etc").textContent = datas[0].etc;
};

const changeDOM = () => {
  document.querySelector(".menu_name").textContent = datas[index].menu_name;
  document.querySelector(".quantity").textContent = datas[index].quantity;
  document.querySelector(".address").textContent = datas[index].address;
  document.querySelector(".what_time").textContent = datas[index].what_time;
  document.querySelector(".etc").textContent = datas[index].etc;
};

const changeIndex = (mode) => {
  if (mode === "prev") {
    if (index !== 0) {
      index = index - 1;
    } else {
      index = datas.length - 1;
    }
  } else {
    if (index !== datas.length - 1) {
      index = index + 1;
    } else {
      index = 0;
    }
  }
  changeDOM();
};

onload = async () => {
  try {
    const response = await axios.get("../php/getOrder.php");
    datas = response.data;
    if (datas) {
      getFirstOrder();
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".myOrderMain").style.display = "grid";
    } else {
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".ifNoData").style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
};
