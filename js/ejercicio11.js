let indice = 1;
let edadMayor = 0;
let nombreMayor = "";

while(indice <= 3){
    let edad = parseInt(prompt("Ingrese una edad: "));
    let nombre = prompt("Ingrese un nombre: ");
    edadMayor = Math.max(edad, edadMayor);
    if(edad === edadMayor){
        nombreMayor = nombre;
    }
    indice++;
}

document.write("La persona de mayor edad es: " + nombreMayor);