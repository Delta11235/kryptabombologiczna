<?php
$servername = "localhost";
$username = "id21283067_beensus69";
$password = "039f,sV-X1/afA{";
$dbname = "id21283067_kryprabomboligicznadb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM uzytkownicy";
$result = $conn->query($sql);
$final;
$final="[";

while($row = mysqli_fetch_assoc($result)) {
    $final=$final.json_encode($row);
    $final=$final.",";
}
$final=rtrim($final, ",");
$final=$final."]";

echo $final;


$conn->close();
?>
