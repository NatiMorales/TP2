let texto = prompt("Ingrese un texto: ").toLowerCase();
let i = 0;
while(i < texto.length){
    let letra = texto.charAt(i);
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        document.write(`La vocal "${letra}" esta en la posición ${i}. `);
        break;
    }
    i++;
}