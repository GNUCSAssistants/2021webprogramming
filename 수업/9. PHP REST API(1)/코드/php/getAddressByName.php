<?php
require_once("dbconfig.php");
$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$nameInput = $_POST["nameInput"];
$sql = "SELECT address FROM person WHERE name = '$nameInput'";  
$res = $db->query($sql); 
$row = $res->fetch_array(MYSQLI_ASSOC); 
if ($row) {
    echo json_encode($row,JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
} else {            
    echo false; 
}
mysqli_close($db);

