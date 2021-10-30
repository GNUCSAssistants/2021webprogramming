<?php
// DB접속의 기본이 되는 파일
// 각 파일의 제일 첫번째에 위치시킬것 

// 에러 콘솔로 출력
// 실제 배포 시엔 꺼줘야한다.
error_reporting(E_ALL);
ini_set("display_errors", 1);
// json type 사용시 필요한 헤더
header("Content-Type:application/json");

// DB 접속
// 실제 db정보를 여기다 담으면 큰일남!
$host = 'localhost';
$user = 'root';
$pw = '111111';
$dbName = 'test';
$db = new mysqli($host, $user, $pw, $dbName);

// 기본 클라이언트 문자 집합 설정하기
mysqli_set_charset($db, "utf8");
