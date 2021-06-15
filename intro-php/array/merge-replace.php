<?php 

$me = [
    "firstname" => "Laura",
    "lastname"=> "Vilain",
    "hobbie" => array('lecture','jeux vidéo','la bouffe')
];

$soulmate = [
    "firstname" => "Bloubliblou",
    "lastname"=> "Blablou",
    "hobbie" => array('Blou','Bla','Blibloubla')
];

$fusion = array_merge($me["hobbie"], $soulmate["hobbie"]);
$replace = array_replace($me, $soulmate);

echo '<pre>';
print_r($fusion);
print_r($replace);
echo '</pre>';