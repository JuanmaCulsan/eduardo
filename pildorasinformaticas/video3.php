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
        print "bienvenidos al curso de php <br>";
        print "hola alumnos <br>";
        print "Hasta el proximos video <br>";

        $nombre = 'juanma';
        $edad = 26;

        print "el nombre de usuario es ". $nombre ." y tiene ".$edad." años";

        function dameNombre(){
            $nombre = "Africa";
        }
        dameNombre();

        print $nombre;
    ?>
</body>
</html>