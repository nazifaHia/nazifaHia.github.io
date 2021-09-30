<?php
if($_POST["Message"]) {
mail("tasnimhia75@gmail.com", "Here is the sample subject line",
$_POST["Insert Your Message"]. "From: tasnimhia75@gmail.com");
}
?>