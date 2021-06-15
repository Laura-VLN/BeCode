<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This is a contact form. You can use it to contact our support. We'll give you an answer as soon as possible !">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Contact form - Hackers Poulette</title>
</head>
<body>
    <div class="rects">
        <div class="grey_rect"></div>
        <div class="white_rect"></div>
        <div class="contact_form">
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">

                <fieldset class="informations">
                    <legend>Your informations</legend>
                    <p>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name_text" placeholder="Name" required>
                    </p>
                    <p>
                        <label for="lastname">Lastname</label>
                        <input type="text" name="lastname" id="lastname_text" placeholder="Lastname" required>
                    </p>

                    <p class="genderRadio">
                        <input type="radio" name="gender" id="female_radio" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male_radio" value="male">
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="other_radio" value="other">
                        <label for="other">Other</label>
                    </p>

                    <label for="email">Email</label>
                    <input type="text" name="email" id="email_text" placeholder="Email Address" required>

                    <p>
                        <label for="country_selector">Country</label>
                        <select name="country" id="country_selector" required>
                            <option value="">-Choose a country-</option>
                            <?php
                            $countries = array("Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
                                foreach ($countries as $key) {
                                    echo "<option value=\"" . $key . "\">" . $key . "</option></br>";
                                }
                            ?>
                        </select>
                    </p>
                </fieldset>

                <fieldset class="request">
                    <legend>Your request</legend>
                    <p>
                        <label for="subject_selector">Subject</label>
                        <select name="subject" id="subject_selector">
                            <option value="first_subject">I didn't received my order</option>
                            <option value="second_subject">Something is missing in my order</option>
                            <option value="third_subject" selected>Other</option>
                        </select>
                    </p>

                    <p>
                        <label for="message">Message</label>
                        <textarea type="text" name="message" id="message_text" placeholder="Your message here" required></textarea>
                    </p>
                </fieldset>
                <input type="submit" id="submit" name="submit" value="Submit">
            </form>
        </div>
        <div class="logo"></div>
    </div>
    <?php include 'form.php';?>
</body>
</html>