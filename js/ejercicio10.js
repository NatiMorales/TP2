let filas = parseInt(prompt("Ingrese la cantidad de filas: "));
let columnas = parseInt(prompt("Ingrese la cantidad de columnas: "));

let totalCeldas = filas * columnas;
document.write("<table><tbody>");
for(let i = 1; i <= filas; i++){
    document.write("<tr>");
    for(let j = 1; j <= columnas; j++){
        document.write("<td>");
        document.write(totalCeldas);
        document.write("</td>");
        totalCeldas--;
    }
    document.write("</tr>");
}
document.write("</tbody></table>");