let cantidadNumeros = parseInt(prompt("Ingrese un número: "));

if(cantidadNumeros > 0 && cantidadNumeros <= 50){
    for(let fila = cantidadNumeros; fila > 0; fila--){
        document.write("<p>");
        for(let columna = 1; columna <= fila; columna++){
            document.write(fila);
        }
        document.write("</p>");
    }
} else {
    alert("Dato erroneo");
}