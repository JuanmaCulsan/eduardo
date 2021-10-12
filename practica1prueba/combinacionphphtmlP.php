<?php
    require("headerP.php");
    require("conexionP.php");
 

    $sql= "SELECT * FROM usuario";
    $results = mysqli_query($conn, $sql);
 
    if ($results === false) {
        echo mysqli_error($conn);
    } else {
        $users = mysqli_fetch_all($results, MYSQLI_ASSOC);
    }

?>
 
<!DOCTYPE html>
<html>
<head>
    <title>USUARIOS</title>
    <meta charset="utf-8">
</head>
<body>
 
    <header>
        <h1>USUARIOS</h1>
    </header>
 
    <main>
        <?php if (empty($users)): ?>
            <p>No hay ningún usuario registrado</p>
        <?php else: ?>
            <ul>
                <?php foreach ($users as $user): ?>
                    <li>
                        <user>
                            <h2><?= $user['nombre']; ?></h2>
                            <p><?= $user['login']; ?></p>
                            <p><?= $user['pass']; ?></p>
                        </user>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
    </main>
</body>
</html>