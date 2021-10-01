<?php
    /*   TU CÓDIGO   */

    /*   EJERCICIO 1   */

    /*
    $ejer1 = $_GET["booleano"];

    if ($ejer1 =="true") {
        echo "verdadero"."<br>";
    }
    else{
        echo "falso"."<br>";
    }
    */

    //EJERCICIO 1 CORRECCIÓN
    /*
    if (empty($ent1)) {
        echo "Debes introducir algo";
    }
    //Si no está vacia entro aquí
    else {
        if (strtolower($ent1)=="true") {
            echo "Verdadero";
        }
        elseif (strtolower($ent1)=="false") {
            echo "Falso";
        }
        else{
            echo "Eso no vale";
        }
    }


    ----------------------------

    function str_to_boolean($ent2){
        $bool = array(
            "true"=true,
            "false"=false
        );

        return $bool[$ent2];
    }
    
    $b str_to_boolean($ent2);
    
    -----------------------------------------------------

    OTRO EJEMPLO

    */
    $ejer1 = $_GET["booleano"];
    function str_to_bool2($ejer1) {
 
        return Array(
            "true" => true,
            "false" => false
        )[$ejer1];
 
    }
    $b = str_to_bool2($ejer1);

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
        echo "no se ha seleccionado ni perro, ni gato, ni loro"."<br>"; 
    }


    /*   EJERCICIO 4   */

    $ejer4 = strtolower($_GET["animal_4"]);

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
            echo "no se ha seleccionado ni perro, ni gato, ni loro"."<br>";
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

    /*   EJERCICIO 6   */
    $ent4 = strtolower($_GET['ent1']);
    $ent5 = strtolower($_GET['ent2']);
    $ent6 = strtolower($_GET['ent3']);

    /*
    $valor1 = strtolower($ent4);
    $valor1 = strtolower($ent5);
    $valor1 = strtolower($ent5);
    */


    if($ent5=="and"){
        if ($ent4=="true" && $ent6=="true"){
            echo "verdadero";
        }
        elseif (($ent4=="true" && $ent6=="false")||($ent4=="false" && $ent6=="true")){
            echo "falso";
        }
        elseif ($ent4=="false" && $ent6=="false") {
            echo "true";
        } 
        else{
            echo "te has equivocado primo";
        }
    }
    elseif ($ent5=="or") {
        if ($ent4=="true" || $ent6=="true"){
            echo "verdadero";
        }
        elseif (($ent4=="true" || $ent6=="false")||($ent4=="false" || $ent6=="true")){
            echo "true";
        }
        elseif ($ent4=="false" || $ent6=="false") {
            echo "falso";
        } 
        else{
            echo "te has equivocado primo";
        }
    }
    elseif ($ent5=="xor") {
        if ($ent4==$ent6){
            echo "falso";
        }
        elseif (($ent4=="true" && $ent6=="false")||($ent4=="false" && $ent6=="true")){
            echo "true";
        }
        else{
            echo "te has equivocado primo";
        }
    }
    else {
        echo "mongolo";
    }


    /*   EJERCICIO 7   */

    $frase = ($_GET['frase']);

    $palabras=explode(" ",$frase);

    //print_r($palabras);

    for ($i=0; $i < count($palabras); $i++) { 
        echo $palabras[$i]."<br>";
    }

        
?>
