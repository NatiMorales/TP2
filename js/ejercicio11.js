let indice = 1;
let edadMayor = 0;
let nombreMayor = "";
let contador=0;

while(indice <= 3){
    let edad = parseInt(prompt("Ingrese una edad: "));
    let nombre = prompt("Ingrese un nombre: ");
    if(edad===edadMayor){
        contador++;
    }else{
        edadMayor = Math.max(edad, edadMayor);
        if(edad === edadMayor){
            nombreMayor = nombre;
        }
    }
    indice++;
}
if(contador===2){
    document.write("Las 3 edades ingresadas son iguales");
}else{
    document.write("La persona de mayor edad es: " + nombreMayor);
}