<form>
    <input type="radio" action = "" name="gender" value="human">
    <label for="radio">Human</label>
    <input type="radio" action = "" name="gender" value="cat">
    <label for="radio">Cat</label>
    <input type="radio" action = "" name="gender" value="unicorn">
    <label for="radio">Unicorn</label>
    <input type="submit" name="submit" value="Submit">
</form>

<?php

if (isset($_GET["gender"])) {
    $gender = $_GET["gender"];
    $gif_human = ($gender == "human") ? "<img src =\"https://media.giphy.com/media/2shBNJSPTrpWvoXfpD/giphy.gif\"/>" : $gif_cat = ($gender == "cat") ? "<img src =\"https://media.giphy.com/media/s7hSxcXiJUS2s/giphy.gif\"/>" : $gif_unicorn = ($gender == "unicorn") ? "<img src =\"https://media.giphy.com/media/3oEduFsHnm570eb3G0/giphy.gif\"/>" : $gif_human;
    echo $gif_human;
}