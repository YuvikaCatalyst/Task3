<?php
   /* if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = $_POST['first_name'];
        $middle_name = $_POST['middle_name'];
        $last_name = $_POST['last_name'];
    
        $output = "Name: $first_name<br>middle_name: $middle_name<br>last_name: $last_name";
    }*/

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = $_POST['first_name'];
        $middle_name = $_POST['middle_name'];
        $last_name = $_POST['last_name'];
    
        $output = [
            'first_name' => $first_name,
            'middle_name' => $middle_name,
            'last_name' => $last_name
        ];
    
        // Encode as JSON and send the response
        header('Content-Type: application/json');
        echo json_encode($output);
       
    }
?>
