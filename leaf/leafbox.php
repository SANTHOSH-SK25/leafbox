<!DOCTYPE html>
<html>
<head>
<title>leaf box log-in page</title>
<link rel="stylesheet" type="text/css" href="leafbox.css">
</head>
<body>

<?php
    require('db.php');
    session_start();
    // When form submitted, check and create user session.
    if (isset($_POST['Employeeid'])) {
        $Employeeid = stripslashes($_REQUEST['Employeeid']);    // removes backslashes
        $Employeeid = mysqli_real_escape_string($con, $Employeeid);
        $Password = stripslashes($_REQUEST['Password']);
        $Password = mysqli_real_escape_string($con, $Password);

        echo $Password;
        // Check user is exist in the databas  e
        echo $query    = "SELECT * FROM `login` WHERE Employee='$Employeeid'
                     AND Password='" . ($Password) . "'";
        $result = mysqli_query($con, $query) or die(mysqli_error());
        $rows = mysqli_num_rows($result);
        
        if ($rows == 1) {
            $_SESSION['Employeeid'] = $Employee;
            // Redirect to user dashboard page
            header("Location: leafboxmain.html");
        } else {
            echo "<div class='form'>
                  <h3>Incorrect Username/password.</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a> again.</p>
                  </div>";
        }
    } 
    else {
?>
    
<h1>Leaf Box </h1>

<div class="d">

<form  method="post" >



<label  style="color:white;" class="a"> Employee Id </label>


<input type="text" name="Employeeid" placeholder="ID" required class="b"> <br><br>



<label style="color:white;" class="a"> Password </label>


<input type="Password" name="Password" placeholder="****************" required class="b"> <br><br>


<div class="sub">
<input type="submit" name="submit" value="login">

<p class="link">Don't have an account? <a href="registration.php">Registration Now</a></p>
</div>

</form>
</div>

<?php
    }
?>










	
</body>
</html>








