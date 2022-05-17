//En esa lección vamos a usar la función "random": Math(Math.random); para que la máquina nos tire números aleatorios y elegidos por ella misma. pero la máquina nos da número en el intervalo de 0 a 1, si quisieramos tener un intervalo de 0 a 10 lo único que tenemos que hacer es multiplicarlo por 10: Math(Math.random()*10);.
//para redondear y eliminar los decimales usamos Math.round(Math.random()); -->



       /*function saltarLinea() {
            document.write("<br>");
            document.write("<br>");
        }
        
        function imprimir(frase) {
            document.write(frase);
            saltarLinea();
        }

        var numeroPensado = Math.round(Math.random()*10);
        var numeroIngresado = parseInt(prompt("ingrese un número entre 0-10"));

        if (numeroPensado == numeroIngresado){
            imprimir("usted acertó")
        }

        if (numeroPensado != numeroIngresado){
            imprimir("usted falló, el número pensado era " + numeroPensado)
        }*/


//java nos permite usar un comando que ejecute una instrucción que no entre en la orden
        function saltarLinea() {
            document.write("<br>");
            document.write("<br>");
        }
        
        function imprimir(frase) {
            document.write(frase);
            saltarLinea();
        }

        var numeroPensado = Math.round(Math.random()*10);
        var numeroIngresado = parseInt(prompt("ingrese un número entre 0-10"));

        if (numeroPensado == numeroIngresado){
            imprimir("usted acertó")
        }

        else {
            imprimir("usted falló, el número pensado era " + numeroPensado)
        }


