<?php
    $cookie=$loggin.'cookie';
    //EL VALOR EN ESTE CASO CUANDO FUE EL ULTIMO MOMENTO EN EL QUE SE CONECTÓ
    $date = new Datetime();
    //lo cambio de formato para que sea legible
    $valor = $date -> format('Y-m-d H:i:s');
    //el tiempo de la cookie
    $tiempo = time()+84600*30;

    setcookie($cookie,$valor,$tiempo,"/");
?>