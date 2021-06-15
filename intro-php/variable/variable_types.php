<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php 

    $firstname = "Laura";
    $age = 27;
    $eyeColor = "green";
    $familyNames = array(
        0 => "Francis",
        1 => "Catherine"
    );
    $isHungry = true;


    ?>

    <p>Hi! My name is <?php echo $firstname ?>.</p>
    <p>I am <?php echo $age ?> years old.</p>
    <p>My eyes are <?php echo $eyeColor ?>.</p>
    <p>The first person in my family is <?php echo $familyNames[0] ?>.</p>

</body>
</html>