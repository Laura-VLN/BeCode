<form method="get" action="">
    <label for="name">Name</label>
    <input type="text" name="name"></br>
    <input type="radio" action = "" name="gender" value="boy">
    <label for="radio">Boy</label>
    <input type="radio" action = "" name="gender" value="girl">
    <label for="radio">Girl</label></br>
    <label for="teacher">Name of the teacher</label>
    <input type="text" name="teacher"></br>
    <input type="radio" action = "" name="reason" value="illness">
    <label for="radio">illness</label>
    <input type="radio" action = "" name="reason" value="death">
    <label for="radio">death of the pet (or a family member)</label></br>
    <input type="radio" action = "" name="reason" value="activity">
    <label for="radio">significant extra-curricular activity</label>
    <input type="radio" action = "" name="reason" value="other">
    <label for="radio">any other excuse of your choice</label></br>
    <input type="submit" name="submit" value="Submit">
</form>

<?php

if (isset($_GET["name"]) && isset($_GET["gender"]) && isset($_GET["teacher"]) && isset($_GET["reason"])) {

    $name = $_GET["name"];
    $gender= $_GET["gender"];
    $teacher= $_GET["teacher"];
    $reason= $_GET["reason"];

    $illness_boy = "My boy ". $name . " who is student of ". $teacher . " can't come to the course because he is sick";
    $death_boy = "My boy ". $name ." who is student of ". $teacher . " can't come to the course because we have a death in our family";
    $activity_boy = "My boy ". $name ." who is student of ". $teacher . " can't come to the course because he is sick";
    $other_boy = "My boy ". $name ." who is student of ". $teacher . " can't come to the course because he is sick";

    $illness_girl = "My girl ". $name ." who is student of ". $teacher . " can't come to the course because she is sick";
    $death_girl = "My girl ". $name ." who is student of ". $teacher . " can't come to the course because she is sick";
    $activity_girl = "My girl ". $name ." who is student of ". $teacher . " can't come to the course because she is sick";
    $other_girl = "My girl, ". $name .", who is student of ". $teacher . " can't come to the course because she is sick";

    if ($gender == "boy"){
        if($reason == "illness"){
            echo $illness_boy;
        }else if ($reason == "death"){
            echo $death_boy;
        }else if ($reason == "activity"){
            echo $activity_boy;
        }else if ($reason == "other"){
            echo $other_boy;
        }
    } else {
        if($reason == "illness"){
            echo $illness_girl;
        }else if ($reason == "death"){
            echo $death_girl;
        }else if ($reason == "activity"){
            echo $activity_girl;
        }else if($reason == "other"){
            echo $other_girl;
        }
    }
}