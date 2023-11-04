let indice = 1;
let edadMayor = 0;
let nombreMayor = "";

while(indice <= 3){
    let edad = parseInt(prompt("Ingrese una edad: "));
    let nombre = prompt("Ingrese un nombre: ");
    
    if(edad > edadMayor){
        edadMayor = edad;
        nombreMayor = nombre;
    }
    
    indice++;
}

document.write("La persona de mayor edad es: " + nombreMayor);