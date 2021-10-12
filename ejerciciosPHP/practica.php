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
        $entrada = array("a", "b", "c", "d", "e","f", "g", "h", "i");

        $salida = array_slice($entrada, 2);      // devuelve "c", "d", y "e"
        $salida = array_slice($entrada, -2, 1);  // devuelve "d"
        $salida = array_slice($entrada, 0, 3);   // devuelve "a", "b", y "c"

        // observe las diferencias en las claves de los arrays
        print_r(array_slice($entrada, 2, -1));
        print_r(array_slice($entrada, 1, -5, false));
    ?>
</body>
</html>

