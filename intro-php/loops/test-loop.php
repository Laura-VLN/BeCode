<?php

/*$pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');

foreach ($pronouns as $key) {
    if ($key == "He/She") {
        echo $key." codes <br>";
    }
    else {
        echo $key." code <br>";
    }
}*/

/*$number = 1;

while ($number <= 120) {
    echo $number . "</br>";
    $number ++;
}*/

/*for ($number = 1; $number <= 120; $number ++) {
    echo $number . "</br>";
}*/

/*$team = ["Pierre", "Paul", "Jacques"];

foreach ($team as $key) {
    echo $key . "</br>";
}*/
?>

<form>
    <label for="country_selector">Choose a country</label>

    <select name="countries" id="country_selector">
        <option value="">--Please choose an option--</option>
        <?php 
        $countries = [
            "BEL" => "Belgique",
            "FRA" => "France",
            "ESP" => "Espagne",
            "ITA" => "Italie",
            "PRT" => "Portugal",
            "HRV" => "Croatie",
            "DEU" => "Allemagne",
            "NOR" => "Norvège",
            "DNK" => "Danemark",
            "CHE" => "Suisse"
        ];

        foreach ($countries as $key => $value) {
            echo "<option value=\"" . $key . "\">" . $value . "</option></br>";
        }
        ?>
    </select>
</form>