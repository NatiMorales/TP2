let frase = "";
let guion = 0;

do {
  let cadena = prompt("Ingrese una cadena de texto: ");

  if (guion !== 0) {
    frase = frase + " - " + cadena;
  } else {
    frase = frase + cadena;
  }

  guion++;
} while (confirm("¿Desea seguir agregando cadenas de texto?"));
document.write("Las cadenas de texto ingresadas son: " + frase);