<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

header("Content-Type:application/json");

$host = 'localhost';
$user = 'root';
$pw = '111111';
$dbName = 'lunchbox';
$db = new mysqli($host, $user, $pw, $dbName);

mysqli_set_charset($db, "utf8");
