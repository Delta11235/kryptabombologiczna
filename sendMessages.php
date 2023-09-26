

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

$wyslal = $_POST["wyslal"];
$czat = $_POST["czat"];
$wiadomosc = $_POST["wiadomosc"];

$sql = "INSERT INTO wiadomosci (id_uzytkownika, nr_czatu, wiadomosc)
VALUES ($wyslal, $czat, '$wiadomosc')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>
