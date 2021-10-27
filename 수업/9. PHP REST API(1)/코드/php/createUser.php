<?php
require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);
// 클라이언트로부터 받아온 것을 php 변수에 담음
$nameInput = $_POST["nameInput"];
$addressInput = $_POST["addressInput"];
// member 테이블로부터 id가 일치하는게 있는지 파악
$sql = "SELECT * FROM person WHERE name = '$nameInput'";
//실행결과는 $res에 저장
$res = $db->query($sql); 
// 넘어온 결과를 한 행씩 패치해서 $row 라는 배열에 담는다.
$row = $res->fetch_array(MYSQLI_ASSOC); 

// 만약 배열이 존재하지 않는다면,
// 동일한 아이디가 없다는 뜻이므로 입력 진행
if ($row === null) { 
    $sql = "INSERT INTO `person` (`name`, `address`) 
        VALUES ('$nameInput','$addressInput')";
    $db->query($sql); // SQL 실행
    echo true;
} else {    // 만약 동일한 아이디가 있다면 false 반환하며 입력 실패
    echo false;
}
mysqli_close($db);
