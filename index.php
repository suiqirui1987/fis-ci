<?php
$c =  isset($_GET["c"])?$_GET["c"]:"index";


$datafile =  dirname(__FILE__) . "/php-test-data/".$c."_data.php";
if(!is_file($datafile ))
{
	die(" datafile is no file");
}
$tplfile =  dirname(__FILE__) . "/application/views/".$c.".php";
if(!is_file($tplfile ))
{
	die(" tplfile is no file");
}

	include $datafile;
	include $tplfile;
