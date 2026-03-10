<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php

    echo "Hola mundo!";
    //ejercicio 2
    $var1 = 1;
    $var2 = 2;
    $var3 = 3;

    $str = "
    <h1>Variable 1 : $var1</h1>
    <h1>Variable 2 : $var2</h1>
    <h1>Variable 3 : $var3</h1>
    ";

    echo $str;

    echo "<br>";
    echo "<p>Cambio de variable en tiempo de ejecucción</p>";


    $var1 = "bien";
    $var2 = "lomi";
    $var3 = "lomito";

    $str = "
    <h1>Variable 1 : $var1</h1>
    <h1>Variable 2 : $var2</h1>
    <h1>Variable 3 : $var3</h1>
    ";

    echo $str;

    //ejercicio 3 

    $nombre = "brylin";
    $apellido1 = "chavez";
    $apellido2 = "cruz";

    echo "Mi nombre es : " . $nombre . " " .
        $apellido1 . " " . $apellido2;

    //ejercicio 4 

    echo "<br>";
    echo "<b>Mi nombre es : " . $nombre . " " .
        $apellido1 . " " . $apellido2 . "<b>";

    //ejercicio 5 
    echo "Tipos de variables"
        . "<br>";

    $numero = 1;
    $doble = 1.12;
    $cadena = "hola";
    $buleano = true;
    echo "Numero: " . $numero . "<br>";
    echo "Decimal: " . $doble . "<br>";
    echo "Texto: " . $cadena . "<br>";
    echo "Buleana. " . $buleano . "<br>";

    //ejercicio 7
    $entero = 3;
    $real = 2.0;
    $resultado = $entero + $real;
    $tipo = gettype($resultado); //pillar el tipo
    echo "<br>";
    echo $tipo;

    //ejercicio 8 
    echo "<br>";
    $numero1 = 10;
    $numero2 = 20;

    echo "Suma: " . $numero1 . " + " . $numero2 . " = " .
        ($numero1 + $numero2);

    //EJERCICIO 9 
    echo "<br>";
    $numero = 123;

    $resultado = $numero % 2 == 0 ? "Ël número comprabdo es par" :
        "El numero comprobado no es par";
    echo $resultado;

    //EJERCICIO 10 
    echo "<br>";

    echo "El numero es entero: " . (is_int($entero));
    echo "<br>";
    echo "El numero es String: " . (is_string($cadena));
    echo "<br>";

    echo "El numero es doble: " . (is_double($doble));
    echo "<br>";

    echo "El numeoro es booleano: " . (is_bool($buleano));
    echo "<br>";

    //EJERCICIO 11


    echo "<br>";
    unset($doble);
    echo "El numero ha sido definido: " . (isset($entero));
    echo "<br>";
    echo "El string ha sido definido: " . (isset($cadena));
    echo "<br>";

    echo "El doble ha sido definido: " . (isset($doble));
    echo "<br>";

    echo "El booleano ha sido definido: " . (isset($buleano));
    echo "<br>";

    //EJERCICIO 12

    echo date("Y-m-d H:i:s");

    //EJERCICIO 13 e
    echo "<br>";

    date_default_timezone_set("Europe/madrid");
    $fecha = getdate();
    echo "Hoy es. " . $fecha["weekday"] .
        " día " . $fecha["mday"] . " del " . $fecha["year"];

    //EJERCICIO 14

    echo "<br>";
    $fecha1 = strtotime("2025-03-11");
    $fecha2 = strtotime("2025-6-01");
    $diferencia = $fecha1 - $fecha2;
    $fe = getdate($diferencia);
    echo "Diferencia en días: ";
    echo $fe["yday"];
    $resultado = $fecha1 > $fecha2 ?
        "La fecha 1 es mayor que la fecha 2" :
        "La fecha 2 es mayor que la fecha 1";
    echo "<br>";
    echo $resultado;

    //EJERCICIO 15

    $fecha = date("l");
    echo "<br>";
    echo $fecha;
    //EJERCICIO 16
    $fechaNacimiento = "2004-12-12";
    $stmt = strtotime($fechaNacimiento); //timestamp de la fecha pasada 

    $hoy =  strtotime("2026-01-01");
    //timestrmp actual
    $actual = time();
    echo "<br>";
    $fechaFinal = $actual - $stmt;

    $format = date("Y", $fechaFinal); //Esto no es correcto porque suma los años desde 1970
    $años = floor($fechaFinal / (60 * 60 * 24 * 365)); //Convertimos la marca de segundos en años. 

    echo "Años aproximados: " . $años;

    //EJERCICIO 17 
    $bayo = 1;
    $boyo = 2;
    function globo()
    {
        global $bayo;
        global $boyo;
        echo "<br>";
        echo "Suma: " . ($bayo + $boyo);
    }
    globo();


    //EJERCICIO 18
    $GLOBALS["boyo"] = 10;
    $GLOBALS["bayo"]  = 20;
    function suma()
    {
        echo "<br>";
        echo "Sumando variables globales: ";
        echo "Var1: " . $GLOBALS["boyo"] . " + " . " Var2: " . $GLOBALS["bayo"] . " = " . ($GLOBALS["bayo"] + $GLOBALS["boyo"]);
    }
    suma();

    //EJERCICIO 19 
    function memoria()
    {
        static $contador  = 0;
        echo "<br>";
        echo "Se incrementa la variable: " . ++$contador;
    }

    memoria();
    memoria();
    memoria();
    memoria();
    memoria();
    memoria();

    //EJERCIO 20 
    $edad = 18;

    $resultado = $edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    echo "<br>Resultado: " . $resultado;
    //EJERCICIO 21

    $numero = 12;
    $resultado = $edad % 2 == 0 ? "El numero es par" : "El numero es impar";
    echo "<br>Resultado: " . $resultado;

    //EJERCICIO 22 
    $protocolo = "https://";
    $punto = ".";
    $recurso = "www";
    $dominio = "educantabria.com";
    $url = $protocolo . $recurso . $punto . $dominio;
    echo "<br>" . $url;





















    ?>

</body>

</html>