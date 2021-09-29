<?php
    $var1 = true;
    $var2 = false;

    if ($var1&&$var2==true) {
        echo "hola";
    }elseif ($var1||$var2==true) {
        echo "adios";
    }elseif (!$var1){
        echo 24;
    }else{
        echo "adios";
    }

?>