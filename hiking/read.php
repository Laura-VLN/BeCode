<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Randonnées</title>
    <link rel="stylesheet" href="css/basics.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <h1>Liste des randonnées</h1>
    <?php
        try {
            $bdd = new PDO('mysql:host=localhost;dbname=becode;charset=utf8', 'root', '');
        }
        catch(Exception $e) {
            die('Erreur : '.$e->getMessage());
        }

        $reponse = $bdd->query('SELECT * FROM hiking');

        echo "<table style= \"border: 0.1rem solid black\">\n<tbody>";

        while ($donnees = $reponse->fetch()) {
            echo "<tr>\n<td style= \"border: 0.1rem solid black\">" . $donnees["id"] . "</td>
            <td style= \"border: 0.1rem solid black\"><a href=\"http://localhost/html/hiking/update.php?id=" . $donnees["id"] . "\">" . $donnees["name"] . "</a></td>
            <td style= \"border: 0.1rem solid black\">" . $donnees["difficulty"] . "</td>
            <td style= \"border: 0.1rem solid black\">" . $donnees["distance"] . "</td>
            <td style= \"border: 0.1rem solid black\">" . $donnees["duration"] . "</td>
            <td style= \"border: 0.1rem solid black\">" . $donnees["height_difference"] . "</td>
            <td style= \"border: 0.1rem solid black\"><a href =\"http://localhost/html/hiking/delete.php?id=" . $donnees["id"] . "\">Supprimer</a></td>
            </tr>\n";
        }
        echo "</tbody>\n</table>";
    ?>
  </body>
</html>