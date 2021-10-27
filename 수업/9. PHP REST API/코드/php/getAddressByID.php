<?php
require_once("dbconfig.php"); // 항상 맨 앞줄에 추가
// post일 경우, ajax통신을 위해 필요한 코드 json값을 디코딩함
$_POST = JSON_DECODE(file_get_contents("php://input"), true);
// 클라이언트로부터 받아온 것을 php 변수에 담음
$nameInput = $_POST["nameInput"];
// person 테이블로부터 id가 일치하는 것 고른다.
$sql = "SELECT address FROM person WHERE name = '$nameInput'";  
//실행결과는 $res에 저장
$res = $db->query($sql); 
// 넘어온 결과를 한 행씩 패치해서 $row 라는 배열에 담는다.
$row = $res->fetch_array(MYSQLI_ASSOC); 
if ($row) {
    echo json_encode($row,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {            // 만약 참이 아니면 로그인 실패
    echo false; 
}
mysqli_close($db);
