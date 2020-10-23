<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <?php
    //поключаем файлы и делаем универсальную версионность
        $js = [
                'assets/js/phaser.min.js',
                'assets/js/preloader.js',
                'assets/js/place.js',
                'assets/js/game.js',
        ];
        foreach ($js as $script){
            echo '<script type="text/javascript" src="'.$script.'?v='.filemtime($script).'"></script>';
        }
    ?>
    <title>deep-silence.online - пошаговая РПГ онлайн</title>
</head>
<body style="background: black">

</body>
</html>