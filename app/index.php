<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Template App</title>
    <!-- bower:css -->
    <!-- endbower -->

  	<!-- inject:css -->
  	<link rel="stylesheet" href="styles/min/alejandro.min.css">
  	<link rel="stylesheet" href="styles/min/iconos.css">
  	<link rel="stylesheet" href="styles/min/main.min.css">
  	<!-- endinject -->
</head>
<body>
	<?php
		echo "Hola alejandro!";
		for ($i=0; $i < 10; $i++) { 
			echo $i;
		}
	?>
  <i class="icon icon-phone-call"></i>
  <i class="icon icon-smartphone"></i>
  <i class="icon icon-woman-with-headset"></i>
	<i class="icon icon-bicycle"></i>
</body>
<footer>Alejandro Bueno Palma</footer>
    <!-- bower:js -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <!-- endbower -->

    <!-- inject:js -->
    <script src="scripts/min/prueba.min.js"></script>
    <!-- endinject -->
</html>