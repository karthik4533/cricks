<?php
// Database credentials
$servername = "localhost";  // Change if your database server is different
$username = "root";         // Change to your database username
$password = "";             // Change to your database password
$dbname = "product";        // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully to the database.";
}
?>
