let cantidadNumeros = 500;
let indice = 1;
while(indice <= cantidadNumeros){
    document.write("<p>");
    document.write(indice);
    if((indice % 4) === 0){
        document.write(" (Múltiplo de 4)");
    }
    if((indice % 9) === 0){
        document.write(" (Múltiplo de 9)");
    }
    document.write("</p>");
    if((indice % 5) === 0){
        document.write("<hr>");
    }
    indice++;
}