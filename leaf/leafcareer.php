<!DOCTYPE html>
<html>
<head>
<title>leaf box main page</title>
<link rel="stylesheet" type="text/css" href="leafboxcss1.css">
</head>

<body>


<div class="careers2">



<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "leafbox";

$conn = new mysqli($server,$username,$password,$dbname);

if (isset($_POST['submit']))
{

        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $dob = $_POST['dob'];
        $gender = $_POST['gender'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $country = $_POST['country'];
        $file = $_POST['file'];
        // $check = $_POST['check'];

        $query = "insert into career(fname,lname,dob,gender,email,phone,address,country,file)
        values('$fname','$lname','$dob','$gender','$email','$phone','$address','$country','$file')";

        $run = mysqli_query($conn,$query) or die(mysqli_error());
        if ($run)
        {
            echo "Form submitted successfully!!!";
        }
        else{
            echo "Form not submitted successfully!!!";
        }
}
else
{
    echo " all fields required";
}

?>

</div>
</body>
</html>