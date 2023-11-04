let texto =  prompt("Ingrese un texto: ").toLowerCase();
let cantidadVocales = 0;
for(let indice = 0; indice < texto.length; indice++){
    let letra = texto.charAt(indice);
    if( letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        cantidadVocales++;
    }
}

document.write("La cantidad de vocales en el texto es: "+ cantidadVocales);