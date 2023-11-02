let suma = 0;

do{
    let numero = parseInt(prompt("Ingrese un número: "));
    if(numero > 0 || numero <= 0){
        suma = suma + numero;
    } else {
        alert("Dato incorrecto. Ingrese un número");
    }
    console.log(numero)
    
}while(confirm("¿Desea seguir ingresando números?"));

document.write("La suma de todos los números ingresados es: " + suma);