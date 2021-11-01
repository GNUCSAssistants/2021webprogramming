<?php
require_once("dbconfig.php"); 
$_POST = JSON_DECODE(file_get_contents("php://input"), true);
$nameInput = $_POST["nameInput"];
$addressInput = $_POST["addressInput"];
$sql = "SELECT * FROM person WHERE name = '$nameInput'";
$res = $db->query($sql); 
$row = $res->fetch_array(MYSQLI_ASSOC); 
if ($row === null) { 
    $sql = "INSERT INTO `person` (`name`, `address`) 
        VALUES ('$nameInput','$addressInput')";
    $db->query($sql);
    echo true;
} else { 
    echo false;
}
mysqli_close($db);

