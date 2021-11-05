<?php
require_once("dbconfig.php");
$sql = "
    SELECT 
        order_id,
        menu_name,
        quantity,
        address,
        what_time,
        etc
    FROM ordered
";

$data = array();

$res = $db->query($sql);

for ($i = 0 ; $i < $res->num_rows ; $i++)  {
    $row = $res->fetch_array(MYSQLI_ASSOC);
    array_push($data, $row);
}

if ($data != null) {
    echo json_encode($data, JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {    // 사용자 주문 내역이 없을 경우
    echo json_encode(false,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
}

mysqli_close($db);
