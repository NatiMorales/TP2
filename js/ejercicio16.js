let texto = prompt("Ingrese un texto: ");

for(let indice = (texto.length - 1); indice >= 0; indice--){
    let letra = texto.charAt(indice);
    document.write(letra);
}