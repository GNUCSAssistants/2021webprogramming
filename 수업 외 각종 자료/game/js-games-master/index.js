// data
const cardArray = [
  {
    name: "cat",
    img: "./public/cat.png",
    id: null,
    done: false,
  },
  {
    name: "cat",
    img: "./public/cat.png",
    id: null,
    done: false,
  },
  {
    name: "dog",
    img: "./public/dog.png",
    id: null,
    done: false,
  },
  {
    name: "dog",
    img: "./public/dog.png",
    id: null,
    done: false,
  },
  {
    name: "elephant",
    img: "./public/elephant.png",
    id: null,
    done: false,
  },
  {
    name: "elephant",
    img: "./public/elephant.png",
    id: null,
    done: false,
  },
  {
    name: "hedgehog",
    img: "./public/hedgehog.png",
    id: null,
    done: false,
  },
  {
    name: "hedgehog",
    img: "./public/hedgehog.png",
    id: null,
    done: false,
  },
  {
    name: "pig",
    img: "./public/pig.png",
    id: null,
    done: false,
  },
  {
    name: "pig",
    img: "./public/pig.png",
    id: null,
    done: false,
  },
  {
    name: "squirrel",
    img: "./public/squirrel.png",
    id: null,
    done: false,
  },
  {
    name: "squirrel",
    img: "./public/squirrel.png",
    id: null,
    done: false,
  },
];
// 파싱한 DOM 정보
const gameDOM = [];
// 클릭 횟수
let clickCount = 0;
// 첫번째, 두번째 클릭 인덱스
let clickFirst = -1;
let clickSecond = -1;

// function

// DOM 정보를 작업하기쉽게 미리 파싱
const getGameDOM = () => {
  // querySelectorAll 사용 시, 이렇게 두 개를 띄워서 쓰면
  // container 클래스 안에 있는 row 클래스를 전부 다 가져오라는 뜻.
  // querySelector 역시 마찬가지로 사용 가능
  const rows = document.querySelectorAll(".container .row");
  // rows 는 정확히 말하면 배열이 아니고 NodeList 이기 때문에 map 사용 못함.
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
  }
};

// cardArray 에 DOM 위치에 알맞은 id 부여함.
const setIDtoCardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";
  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";
  cardArray[8].id = "2-0";
  cardArray[9].id = "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
};

// 물음표로 가득 찬 게임판 생성
const createBoard = () => {
  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      // img 태그를 만들어서 card 안에 담는다.
      const card = document.createElement("img");
      // card(img태그) 에 속성(attribute) 추가함
      // 물음표 이미지의 경로
      card.setAttribute("src", "./public/Question-Mark.png");
      card.classList.add("eachImage");
      // 이렇게 만들어진 card(img태그) 를 각각의 칸에 집어넣는다.
      gameDOM[i][j].appendChild(card);
    }
  }
};

// 첫번째 클릭인지 두번째 클릭인지 판단해 클릭 데이터 저장
const setClickHistory = (location) => {
  if (clickFirst === -1) {
    clickFirst = location;
  } else {
    clickSecond = location;
  }
};

// 틀렸을 때 다시 뒤집음
const backFlip = () => {
  // 파싱
  const parsedIdFirst = cardArray[clickFirst].id.split("-");
  const parsedIdSecond = cardArray[clickSecond].id.split("-");

  // 0.5초 딜레이. 이게 없으면 두번째 이미지를 아예 확인 못함
  setTimeout(() => {
    gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src =
      "./public/Question-Mark.png";
    gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src =
      "./public/Question-Mark.png";
  }, 500);
};

// 일치하는지 판별
const isCorrect = () => {
  // 만약 클릭했던 두 개의 그림이 일치하면 done 을 true 로 바꿔서 flip 이 작동 안되게 처리
  if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
    cardArray[clickFirst].done = true;
    cardArray[clickSecond].done = true;
  } else {
    // 다시 뒤집음
    backFlip();
  }
};

// 클릭하면 뒤집기
const flip = (location) => {
  // 아직 맞추지 않았을때만 실행됨
  if (!cardArray[location].done) {
    // 첫번째 클릭인지 두번째 클릭인지 판단해 클릭 데이터 저장
    setClickHistory(location);
    // 만약 1-2 로 되어있으면, [1, 2] 로 분리됨
    const parsedId = cardArray[location].id.split("-");
    // 이미지 교체
    gameDOM[parsedId[0]][parsedId[1]].querySelector("img").src =
      cardArray[location].img;
    clickCount++;
    if (clickCount === 2) {
      // 초기화
      clickCount = 0;
      // 맞는지 아닌지 판단
      isCorrect();
    }
    // clickFirst와 clickSecond 를 둘 다 -1 로 초기화.
    if (clickFirst !== -1 && clickSecond !== -1) {
      clickFirst = -1;
      clickSecond = -1;
    }
  }
};

// 맨 처음 자동으로 실행됨
onload = () => {
  // DOM 정보를 작업하기쉽게 미리 가져옴
  getGameDOM();
  // 배열을 섞을 때 이런식으로 사용한다. 궁금하면 찾아보기.
  // sort 이후 원래 배열은 바뀐다.
  cardArray.sort(() => 0.5 - Math.random());
  // cardArray 에 DOM 위치에 알맞은 id 부여함.
  setIDtoCardArray();
  // 물음표로 가득 찬 게임판 생성
  createBoard();
};
