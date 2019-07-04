<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Factores primos</title>
</head>

<body>
    <script>
        //Autor:Patricia Suntaxi 
        //Descripción: 3 ejercicio de project euler


        var multiplo = 1;
        var numero = 1;
        var primos = []
        var sumaPrimos = function (numero) {
            if (numero > 10000) {
                console.log("Suma de números primos:" + fact);
                var maximo = primos[primos.length - 1];
                console.log("el mayor multiplo primo del número 600851475143 es :" + maximo + ".");
            } else {
                if (600851475143 % numero === 0) {
                    operacion = (numero / 2);
                    if (operacion % 2 === 0 || operacion % 3 === 0) {
                        return ("error")
                    } else {
                        console.log(numero);
                        primos.push(numero);
                        operacion *= numero;
                    }
                }
                numero++
                sumaPrimos(numero)
            }
        }
    </script>

</body>

</html>
