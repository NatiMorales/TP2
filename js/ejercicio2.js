const nota = parseFloat(prompt("Ingrese una nota"));

switch(true){
    case (nota>=0 && nota<=2):
        alert("Muy deficiente");
        break;
    case (nota===3 || nota===4):
        alert("Insuficiente");
        break;
    case (nota===5 || nota===6):
        alert("Suficiente");
        break;
    case (nota===7):
        alert("Bien");
        break;
    case (nota===8 || nota===9):
        alert("Notable");
        break;
    case (nota===10):
        alert("Sobresaliente");
        break;
    case (nota>10 || nota<0):
        alert("Número erroneo");
        break;
    default:
        alert("Introduce un número válido");
        break;
}
