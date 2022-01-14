<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geostar+Fill&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="rankin.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<div class="conteiner-ranking">
    <h1>DEATH STAR</h1>
    <table>
        <tr>
            <th>PLAYER</th>
            <th>SCORE</th>
        </tr>


<?php
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
 

 
$sql = "SELECT * FROM `players` ORDER BY `players`.`score` DESC";
$sql_query = $mysqli->query($sql) or die("ERRO! " . $mysqli -> error);

while($dados = $sql_query->fetch_assoc()){
    ?>
    
    <tr>
        <td class="linha-tabela"><?php echo $dados['player']; ?></td></br>
        <td><?php echo $dados['score']; ?></td>
    </tr>
    
    <?php
}
?>
    </table>
</div>
<a href="index.html"><button>OK</button></a> 



<?php


?>