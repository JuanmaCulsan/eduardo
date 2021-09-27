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
        #variable numérica
        $numero = 5;
        echo "Esto es una variable número: ", $numero;
        echo "<br></br>";
        var_dump($numero);
        echo "<br></br>";

        #variable de texto
        $palabra = "palabra";
        echo "Esto es una variable texto: ", $palabra;
        echo "<br></br>";
        var_dump($palabra);
        echo "<br></br>";

        #variable booleana
        $boleana = true;
        echo "Esto es una variable booleana: ", $boleana;
        echo "<br></br>";
        var_dump($boleana);
        echo "<br></br>";

        #variable array
        $colores = array("rojo","azul","amarillo");
        echo "Esto es un array: ", $colores[1], ", ", $colores[2];
        echo "<br></br>";
        var_dump($colores);
        echo "<br></br>";

        #variable array con propiedades
        $verduras = array("verdura1"=>"lechuga", "verdura2"=>"cebolla");
        echo "Estoy es una variable array con propiedades: $verduras[verdura1]";
        echo "<br></br>";
        var_dump($verduras);
        echo "<br></br>";

        #variable objeto
        $frutas = (object)["fruta1"=>"pera","fruta2"=>"manzana"];
        echo "esto es una variable objeto: $frutas->fruta1";
        echo "<br></br>";
        var_dump($frutas);
    ?>
</body>
</html>