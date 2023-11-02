let frase = "";
let guion = 0

do{
    let cadena = prompt("Ingrese una frase: ");
    if(guion !== 0){
        frase = frase + " - " + cadena;
    } else {
        frase = frase + cadena;
    }
    guion++;
    
}while(confirm("¿Desea seguir agregando texto?"));
console.log(frase);