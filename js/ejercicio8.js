let cantidadNumeros = parseInt(prompt("Ingrese un número: "));

if(cantidadNumeros > 0 && cantidadNumeros <= 50){
    let fila = 1;
    while(fila<=cantidadNumeros){
        document.write("<p>");
        let columna=1;
        while(columna<=fila){
            document.write(columna);
            columna++;
        }
        fila++;
        document.write("</p>");
    }
} else {
    alert("Dato erroneo");
}