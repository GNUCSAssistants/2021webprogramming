<?php

require_once("dbconfig.php"); // 항상 맨 앞줄에 추가

$sql = "SELECT * FROM person";

// 최종결과
$data = array();

// 실행결과는 $res에 저장
$res = $db->query($sql);

// fetch_array는 한번 실행될때마다 한 행씩 뱉어내므로
// 원하는 걸 모두 얻으려면 반복문 사용해야함.
for ($i = 0 ; $i < $res->num_rows ; $i++)  {
     $row = $res->fetch_array(MYSQLI_ASSOC);
     array_push($data, $row);
}

if ($data != null) {  // 만약 배열이 존재한다면 통신성공
    echo json_encode($data, JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {    // 통신실패: false 반환
    echo false;
}

mysqli_close($db);
