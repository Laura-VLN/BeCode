<?php
/**
 * Series of exercises on PHP conditional structures.
*/ 
/*
// 1.1 Clean your room Exercise 

$room_is_filthy = false;

if($room_is_filthy){
	echo "Yuk, Room is dirty : let's clean it up !";
	//cleanup_room();
	echo "<br>Room is now clean!";
	$room_is_filthy = false;
} else {
	echo "<br>Nothing to do, room is neat.";
}

// 1.2 Clean your room Exercise, improved

// Create the array of possible states
$possible_states = array(
    0 => "health hazard",
    1 => "filthy",
    2 => "dirty",
    3 => "clean",
    4 => "immaculate"
);

// When testing, change the index value to navigate to the possible array values
$room_filthiness = $possible_states[4]; 

if($room_filthiness == $possible_states[0]){
	echo "<br>Yuk, Room is Disgusting! Let's clean it up !";
} else if($room_filthiness == $possible_states[1]){
	echo "<br>Yuk, Room is dirty : let's clean it up !";
} else if($room_filthiness == $possible_states[2]){
	echo "<br>Room is dirty : let's clean it up !";
} else if($room_filthiness == $possible_states[3]){
	echo "<br>Room is not really dirty but let's clean it up a little bit !";
} else {
	echo "<br>Nothing to do, room is neat.";
}

// 2. "Different greetings according to time" Exercise
date_default_timezone_set("Europe/Brussels");
$now = date('h:i');

if ($now >= '05:00' && $now <= '09:00') {
    echo "<br>Good morning !";
}
else if ($now >= '09:01' && $now <= '12:00') {
    echo "<br>Good day !";
}
else if ($now >= '12:01' && $now <= '16:00') {
    echo "<br>Good afternoon !";
}
else if ($now >= '16:01' && $now <= '21:00') {
    echo "<br>Good evening !";
}
else if (($now >= '21:01' && $now <= '23:59') || ($now >= '00:00' && $now <= '04:59')) {
    echo "<br>Good night !";
}
*/

/* 3. "Different greetings according to age" Exercise
<form method="get" action="#">
	<label for="age">Age</label>
	<input type="age" name="age">
	<input type="submit" name="submit" value="Greet me now">
</form>

<?php

if (isset($_GET['age'])){
    if (empty($_GET['age'])) {
        echo "Add your age !";
    }
    else if ($_GET["age"] < 12) {
        echo "Hello kiddo !";
    } 
    else if ($_GET["age"] >= 12 && $_GET["age"] < 18 ){
        echo "Hello Teenager !";
    }
    else if ($_GET["age"] >= 18 && $_GET["age"] < 115 ){
        echo "Hello Adult !";
    }
    else if ($_GET["age"] >= 115){
        echo "Wow! Still alive ? Are you a robot, like me ? Can I hug you ?";
    }
}
else if (!isset($_GET['age'])){
    echo "Tell me your age !";
}*/

/*?>
 
<!-- 5. Display a different greeting according to the user's age, gender and mothertongue.
<form method="get" action="">
    <label for="age">Age</label>
    <input type="text" name="age">
    <input type="submit" name="submit" value="Greet me now">
    <input type="radio" action = "" name="gender" value="Man">
    <label for="radio">Man</label>
    <input type="radio" action = "" name="gender" value="Woman">
    <label for="radio">Woman</label>
    <p>Do you speak english ?</p>
    <input type="radio" action = "" name="language" value="yes">
    <label for="radio">Yes</label>
    <input type="radio" action = "" name="language" value="no">
    <label for="radio">No</label>
</form> -->


<?php
if (isset($_GET['age']) && isset($_GET['gender']) && isset($_GET['language'])) {
    if (empty($_GET['age'])){
        echo "Error. Try again !";
    } 

    else if ($_GET['language'] == "yes") {    
        if ($_GET['gender'] == "Man") {
            if ( $_GET['age'] < 12){
                echo "Hello boy!";
            }
            else if (($_GET['age'] >= 12 && $_GET['age'] < 18)){
                echo "Hello Teenager guy!";
            }
            else if (($_GET['age'] >= 18 && $_GET['age'] < 115)){
                echo "Hello Adult man!";
            }
            else if ($_GET['age'] >= 115 && $_GET['gender']){
                echo "Hello papy! Still alive ? Are you a robot, like me ? Can I hug you ?";
            }
        }
        else if ($_GET['gender'] == "Woman") {
            if ( $_GET['age'] < 12){
                echo "Hello girl!";
            }
            else if (($_GET['age'] >= 12 && $_GET['age'] < 18)){
                echo "Hello Teenager girl!";
            }
            else if (($_GET['age'] >= 18 && $_GET['age'] < 115)){
                echo "Hello Adult woman!";
            }
            else if ($_GET['age'] >= 115 && $_GET['gender']){
                echo "Hello mamy! Still alive ? Are you a robot, like me ? Can I hug you ?";
            }
        }
    }
    else if ($_GET['language'] == "no") {
        if ($_GET['gender'] == "Man") {
            if ( $_GET['age'] < 12){
                echo "Aloha boy!";
            }
            else if (($_GET['age'] >= 12 && $_GET['age'] < 18)){
                echo "Hello Teenager guy!";
            }
            else if (($_GET['age'] >= 18 && $_GET['age'] < 115)){
                echo "Hello Adult man!";
            }
            else if ($_GET['age'] >= 115 && $_GET['gender']){
                echo "Hello papy! Still alive ? Are you a robot, like me ? Can I hug you ?";
            }
        }
        else if ($_GET['gender'] == "Woman") {
            if ( $_GET['age'] < 12){
                echo "Aloha girl!";
            }
            else if (($_GET['age'] >= 12 && $_GET['age'] < 18)){
                echo "Hello Teenager girl!";
            }
            else if (($_GET['age'] >= 18 && $_GET['age'] < 115)){
                echo "Hello Adult woman!";
            }
            else if ($_GET['age'] >= 115 && $_GET['gender']){
                echo "Hello mamy! Still alive ? Are you a robot, like me ? Can I hug you ?";
            }
        }
    }
}
else if (!isset($_GET['age']) || !isset($_GET['gender']) || !isset($_GET['language'])){
    echo "Give me your informations !";
}


6. The Girl Soccer team

<form method="get" action="" name="submit">
    <label for="age">What's your age ?</label>
    <input type="text" name="age">
    <label for="name">What's your name ?</label>
    <input type="text" name="name">
    <input type="radio" action = "" name="gender" value="male">
    <label for="radio">Male</label>
    <input type="radio" action = "" name="gender" value="female">
    <label for="radio">Female</label>
    <input type="submit" name="submit" value="Submit">
</form>

<?php 

if (isset($_GET['age']) && isset($_GET['gender'])) {
    $age = $_GET["age"];
    $gender = $_GET["gender"];
    if ($gender == "female") {
        if ($age >= 21 && $age <= 40) {
            echo "Welcome to the team !";
        }
        else {
            echo "Sorry you don't fit the criteria";
        }
    }
    else {
        echo "Sorry you don't fit the criteria";
    }
}
else if (!isset($_GET['age']) || !isset($_GET['gender'])){
    echo "Give me your informations !";
}

7. Achieve the same, without the ELSE.

<form method="get" action="" name="submit">
    <label for="age">What's your age ?</label>
    <input type="text" name="age">
    <label for="name">What's your name ?</label>
    <input type="text" name="name">
    <input type="radio" action = "" name="gender" value="male">
    <label for="radio">Male</label>
    <input type="radio" action = "" name="gender" value="female">
    <label for="radio">Female</label>
    <input type="submit" name="submit" value="Submit">
</form>

<?php 

if (($_GET['age'] >= 21 && $_GET['age'] <= 40) && ($_GET['gender'] == "female") && $_GET['name']) {
    echo "Welcome to the team !";
}
*/
?>

<form method="get" action="" name="submit">
    <label for="note">What's your note ? (0 to 20)</label>
    <input type="text" name="note">
    <input type="submit" name="submit" value="Submit">
</form>

<?php

if (empty($_GET["note"])) {
    echo "Give me your note !";
}
else if (isset($_GET["note"])) {
    $note = $_GET["note"];
    if ($note <= 4) {
        echo "This work is really bad. What a dumb kid! ";
    }
    else if ($note >= 5 && $note <= 9) {
        echo "This is not sufficient. More studying is required.";
    }
    else if ($note == 10) {
        echo "Barely enough!";
    }
    else if ($note >= 11 && $note <= 14) {
        echo "Not bad!";
    }
    else if ($note >= 15 && $note <= 18) {
        echo "Bravo, bravissimo!";
    }
    else if ($note == 19 || $note == 20) {
        echo "Too good to be true : confront the cheater!";
    }
}