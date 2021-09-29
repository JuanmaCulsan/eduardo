<?php
    /*   TU CÓDIGO   */

    /*   EJERCICIO 1   */

    $ejer1 = $_GET["booleano"];

    if ($ejer1 =="v1") {
        echo "verdadero"."<br>";
    }
    else{
        echo "falso"."<br>";
    }

    /*   EJERCICIO 2   */

    $ejer2 = $_GET["num"];

    if ($ejer2>100){
        echo "el numero es mayor de 100"."<br>";
    }
    elseif ($ejer2>50) {
        echo "el numero es mayor de 50 y menor de 100"."<br>";
    }
    elseif($ejer2>25){
        echo "El número es mayor de 25 y menor de 50"."<br>";
    }
    else{
        echo "el número es menor de 25"."<br>";
    }


    /*   EJERCICIO 3   */

    $ejer3 = $_GET["animal"];

    if ($ejer3=="gato"){
        echo "se ha seleccionado el gato"."<br>";
    }
    elseif ($ejer3=="perro") {
        echo "se ha seleccionado el perro"."<br>";
    }
    elseif ($ejer3=="loro") {
        echo "se ha seleccionado el loro"."<br>";
    }
    else {
        echo "no se ha seleccionado ni perro, ni gato, ni loro"; 
    }


    /*   EJERCICIO 4   */

    $ejer4 = $_GET["animal_4"];

    switch ($ejer4) {
        case "gato":
            echo "se ha seleccionado el gato"."<br>";
            break;
        case "perro":
            echo "se ha seleccionado el perro"."<br>";
            break;
        case "loro":
            echo "se ha seleccionado el loro"."<br>";
            break;
        default:
            echo "no se ha seleccionado ni perro, ni gato, ni loro";
            break;
    }


    /*   EJERCICIO 5   */
    $ent1 = $_GET['entrada1'];
    $ent2 = $_GET['entrada2'];
    $ent3 = $_GET['entrada3'];
    $res=0;

    if ($ent2=="v1") {
        $res = $ent1 + $ent3; 
        echo "el resultado es: $res"."<br>";
    }
    elseif ($ent2=="v2") {
        $res = $ent1 - $ent3;
        echo "el resultado es $res"."<br>";
    }
    elseif ($ent2=="v3") {
        $res = $ent1 * $ent3;
        echo "el resultado es $res"."<br>";
    }
    elseif($ent2=="v4"){
        $res = $ent1 / $ent3;
        echo "el resultado es $res"."<br>";
    }
    else {
        echo "valor incorrecto"."<br>";
    }

?>
