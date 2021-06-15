<?php
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=weatherapp;charset=utf8', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$reponse = $bdd->query('SELECT * FROM Météo');

?>

<form id="cityForm" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">

	<fieldset class="informations">
		<legend>Ajouter une ville</legend>
		<p>
			<label for="ville">Ville</label>
			<input type="text" name="ville" id="ville_text" placeholder="Ville">
		</p>
		<p>
			<label for="haut">Haut</label>
			<input type="text" name="haut" id="haut_text" placeholder="Haut">
		</p>
		<p>
			<label for="bas">Bas</label>
			<input type="text" name="bas" id="bas_text" placeholder="Bas">
		</p>
		<?php
		echo "<table style= \"border: 0.1rem solid black\">\n<tbody>";

		while ($donnees = $reponse->fetch())
		{
			echo "<tr>\n<td style= \"border: 0.1rem solid black\"><input type=\"checkbox\" name=\"data\" value=".$donnees["id"].">".$donnees["id"]."</td><td style= \"border: 0.1rem solid black\">".$donnees["ville"] . "</td><td style= \"border: 0.1rem solid black\">" . $donnees["haut"] . "</td><td style= \"border: 0.1rem solid black\"> " . $donnees["bas"] . "</td></tr>\n";
		}

		echo "</tbody>\n</table>";
		?>
	</fieldset>
	<input type="submit" id="submit" name="submit" value="Submit">
</form>

<?php

if (isset($_POST["ville"]) && isset($_POST["haut"]) && isset($_POST["bas"])) {

	//$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	  
	$ville = $_POST["ville"];
	$haut = $_POST["haut"];
	$bas = $_POST["bas"];
	  
	$bdd->exec("INSERT INTO `Météo` (ville, haut, bas) VALUES ('$ville', $haut, $bas)");

	echo "Modification effectuée.";

}

if (isset($_POST["data"])) {
	$id = $_POST["data"];
	$bdd->exec('DELETE FROM `météo`  WHERE id = '.$id.' ');
}