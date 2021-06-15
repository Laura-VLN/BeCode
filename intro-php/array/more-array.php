<?php

$web_development = [
    "frontend" => array(),
    "backend" => array()
];

array_push($web_development["frontend"], "xhtml");
array_push($web_development["backend"], "ruby on rails");
array_push($web_development["frontend"], "css");
array_push($web_development["frontend"], "flash");
array_push($web_development["frontend"], "javascript");
array_push($web_development["backend"], "javascript");
$web_development["frontend"][0] = "html";
unset($web_development["frontend"][2]);

echo '<pre>';
print_r($web_development);
echo '</pre>';