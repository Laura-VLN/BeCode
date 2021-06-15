<form>
    <input type="radio" action = "" name="gender" value="male">
    <label for="radio">Male</label>
    <input type="radio" action = "" name="gender" value="female">
    <label for="radio">Female</label>
    <input type="submit" name="submit" value="Submit">
</form>

<?php

if (isset($_GET["gender"])) {
    $gender = $_GET["gender"];
    $hello = ($gender == "female") ? "Goodmorning girl !" : "Goodmorning guy !";
    echo $hello;
}