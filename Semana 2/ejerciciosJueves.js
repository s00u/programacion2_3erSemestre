//contador de texto contarpalabras() palabramaslarga() frecuenciadeletra()

//arreglo para contar las palabras que han metido
//palabra mas larga con .length
//frecuencia de letra con for

let lista = [];
let continuar = true;
let respuesta = "";

while(continuar == true){
lista.push(prompt("ingrese una palabra: "));

respuesta = prompt("desesa continuar? ")

if (respuesta === "no" || respuesta === "NO"){
    continuar = false;
}
}

function contarPalabras(){
    
    console.log("el numero de palabras en la lista es de: " + lista.length)

}

function palabraMasLarga(){

    let grandote = ""
    
    for(let i = 0; i < lista.length; i++){

        if(lista[i].length > grandote.length){
            grandote = lista[i]
        }
    }

    console.log("la palabra mas larga es: " + grandote)
}

function frecuenciadeletra(){

    let abecedario = "abcdefghijklmnñopqrstuvwxyz";
    let letraMasRepetida = "";
    let maximo = 0;

    for(let i = 0; i < abecedario.length; i++){

        let letraActual = abecedario[i];
        let contador = 0;

        for(let j = 0; j < lista.length; j++){

            let palabra = lista[j].toLowerCase(); // para que "A" y "a" cuenten igual

            for(let k = 0; k < palabra.length; k++){

                if(palabra[k] === letraActual){
                    contador++;
                }
            }
        }

        if(contador > maximo){
            maximo = contador;
            letraMasRepetida = letraActual;
        }
    }

    console.log("la letra que mas se repite es: " + letraMasRepetida + " (" + maximo + " veces)")
}

contarPalabras();
palabraMasLarga();
frecuenciadeletra();