<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>得图社区</title>
    <script type="text/javascript" src="lib/mod.js"></script>
    <!--[if lt IE 9]>
    <script src="lib/html5shiv.min.js"></script>
    <![endif]-->

</head>
<body>
<?php include "header.php"?>
<br><BR><BR><BR>

<div>
<hr>
<div>PHPLIST</div>

	<?php

		foreach($index_arr as $key=>$val)
		{
			
			echo $val["id"].":".$val["username"]."<br>";
		}
	?>
</div>
<hr>
<section id="detu_header">
	<div id="main">
		
	<div>
</section>

    <script type="text/javascript">
        require('app/main');
    </script>
</body>
</html>