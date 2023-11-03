for(let fila=1; fila<=30; fila++){
    document.write("<p>");
    let indice;
    if(fila >= 10){
        indice = fila / 2;
    } else {
        indice = fila;
    }
    for(let columna=1; columna<=indice; columna++){
        document.write(fila);
    }
    document.write("</p>");
}