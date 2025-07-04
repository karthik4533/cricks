<?php
// Include the database connection
include('db.php');

// SQL query to select all records from the admin table
$sql = "SELECT * FROM admin";  // Replace 'admin' with your actual table name
$result = $conn->query($sql);

// Check if there are records in the admin table
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results found";
}

// Close the connection
$conn->close();
?>
