<?php

try {
    $bdd = new PDO('mysql:host=localhost;dbname=becode;charset=utf8', 'root', '');
}
catch(Exception $e) {
    die('Erreur : '.$e->getMessage());
}

$identifiant = $_POST["username"];
$password = $_POST["password"];

if (isset($identifiant) && isset($password)) {

    $identifiant_valide = $bdd->query("SELECT identifiant FROM utilisateurs WHERE identifiant = '$identifiant'");
    $password_valide = $bdd->query("SELECT `password` FROM utilisateurs WHERE `password` = '$password'");

    if ($identifiant_valide && $password_valide) {
        session_start();
        $_SESSION["username"] = $identifiant;
        $_SESSION["password"] = $password;
        header("location: create.php");
    }
    else {
        echo '<body onLoad="alert(\'Membre non reconnu...\')">';
        echo '<meta http-equiv="refresh" content="0;URL=localhost/html/hiking/login.php">';
    }
}
else {
    echo "Veuillez compléter les champs identifiant et mot de passe.";
}