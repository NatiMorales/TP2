document.write(`<ul>`);
do{
    let dni = parseInt(prompt("Ingrese su DNI: "));

    if(dni >= 0 && dni <= 99999999){
        resto = dni % 23;
        document.write(`<li>`);
        switch(resto){
            //Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
            //(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
            case 0:
                document.write(`Al dni número ${dni} le corresponde la letra: T`);
                break;
            case 1:
                document.write(`Al dni número ${dni} le corresponde la letra: R`);
                break;
            case 2:
                document.write(`Al dni número ${dni} le corresponde la letra: W`);
                break;
            case 3:
                document.write(`Al dni número ${dni} le corresponde la letra: A`);
                break;
            case 4:
                document.write(`Al dni número ${dni} le corresponde la letra: G`);
                break;
            case 5:
                document.write(`Al dni número ${dni} le corresponde la letra: M`);
                break;
            case 6:
                document.write(`Al dni número ${dni} le corresponde la letra: Y`);
                break;
            case 7:
                document.write(`Al dni número ${dni} le corresponde la letra: F`);
                break;
            case 8:
                document.write(`Al dni número ${dni} le corresponde la letra: P`);
                break;
            case 9:
                document.write(`Al dni número ${dni} le corresponde la letra: D`);
                break;
            case 10:
                document.write(`Al dni número ${dni} le corresponde la letra: X`);
                break;
            case 11:
                document.write(`Al dni número ${dni} le corresponde la letra: B`);
                break;
            case 12:
                document.write(`Al dni número ${dni} le corresponde la letra: N`);
                break;
            case 13:
                document.write(`Al dni número ${dni} le corresponde la letra: J`);
                break;
            case 14:
                document.write(`Al dni número ${dni} le corresponde la letra: Z`);
                break;
            case 15:
                document.write(`Al dni número ${dni} le corresponde la letra: S`);
                break;
            case 16:
                document.write(`Al dni número ${dni} le corresponde la letra: Q`);
                break;
            case 17:
                document.write(`Al dni número ${dni} le corresponde la letra: V`);
                break;
            case 18:
                document.write(`Al dni número ${dni} le corresponde la letra: H`);
                break;
            case 19:
                document.write(`Al dni número ${dni} le corresponde la letra: L`);
                break;
            case 20:
                document.write(`Al dni número ${dni} le corresponde la letra: C`);
                break;
            case 21:
                document.write(`Al dni número ${dni} le corresponde la letra: K`);
                break;
            case 22:
                document.write(`Al dni número ${dni} le corresponde la letra: E`);
                break;
            default:
                break;
        }
    } else {
        alert("DNI inválido. Vuelva a ingresar su número");
    }
} while (confirm("¿Desea introducir un DNI nuevamente?"));
document.write(`</ul>`);