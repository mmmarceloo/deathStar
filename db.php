<?php
$nome =$_POST['nome'];
$score =$_POST['score'];
echo("oi, bzsl");

$servername = "localhost";
$database = "jogo";
$username = "root";
$password = "";
// Create connection
$mysqli = new mysqli($servername, $username, $password, $database);
// Check connection

if($mysqli-> connect_errno){
      die("Falha na conexão");
}
 
echo "Connected successfully";
 
$sql = "INSERT INTO players (player, score) VALUES ('$nome', $score)";
$sql_query = $mysqli->query($sql) or die("ERRO! " . $mysqli -> error);

header("location: index.html"); 

?>