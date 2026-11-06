//devolver un numero no un texto redondeando a los decimales indicados
function redondear(){

let numero = Number(prompt("ingrese un numero con decimales"));

console.log(numero.toFixed(2))

console.log("el redondeado es de tipo: " + typeof(numero));

}

redondear();


//dado un texto con calficaciones separadas por comas, calcula el promedio ignorando los valores invalidos

function promedio(){

const califs = "8, 9.5, x, 7, , 10"
const numeros = califs

numeros.split(",")
numeros.map(s => s.trim())
numeros.filter(s => s!== "")
numeros.map(Number)
numeros.filter(n => !Number.isNaN(n))

console.log("corregido: " + numeros)

const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log("Suma: " + suma)

let promedio = Number((suma / numeros.lenght).toFixed(2))
console.log("el promedio es: " + promedio)
}

promedio(); 