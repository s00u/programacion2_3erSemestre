// sin funcion: la formila copiada tres veces
const a = 100 * 1.16, b = 250 * 1.16, c = 80 * 1.16

// con funcion: el iva vive en un solo lugar
const conIva = (precio) = precio * 1.16

// 1. Declaracion
function saludar(nombre){
    return "HOla, " + nombre
}

// 2. Expresion, guardada en una variable
const saludar2 = function (nombre) {
    return "Hola, " + nombre;
}

// 3. Funcion flecha
const saludar3 = (nombre) => "Hola, " + nombre;
saludar("Ana") // Hola, Ana

// Ejemplo con una suma
function suma(num1, num2){
    return num1 + num2
}

console.log("La suma de dos numeros es: " + suma(5,10))

// Ejemplo Area
function ares(base, altura){
    return (base * altura) / 2
}

console.log(area(10, 4)) // 20

// sin las llaves el resultado se devuelve solo, con llaves hace falta un return. 
// Para devolver un objeto, ponlo entre parentesis
const doble = (x) => x * 2;
const suma = (a, b) => a + b
const saludo = () => "hola"
const info = (n) => {
    const m = n * 2
    return 'El doble de ${n} es ${m}'
};
const crear = (n) => ({ valor: n })
console.log(double(4), suma(2, 3))
console.log(info(5), crear (7))

// Declaracion: funciona
console.log(cuadrado(5))
function cuadrado(n) { return n * n; }
// 25
// Flecha en const: error
console.log(cubo(2))
const cubo = (n) => n ** 3
// ReferenceError

// Un valor por defecto se usa cuando falta el argumento.
// ...rest recoge todos los argumentos sobrantes en un arreglo

function potencia(base, exp = 2) {
    return base ** exp
}
console.log(potencia(5), potencia(2, 10))
// 25 1024
function sumarTodos(...numeros){
    return numeros.reduce((a, b) => a + b, 0)
}
console.log(sumarTodos(1, 2, 3, 4), sumarTodos())
//10 0
// los 3 puntos (...numeros) se usa para cuando no sabes cual va a ser la cantidad total de datos que vas a ingresar

//Se puede guardar en una cariable, pasar como argumento y devolver desde otra funcion
//Es la base de map, filter y de las clausuras

function aplicar(valor, fn) {
    return fn(valor)
}
console.log(aplicar(5, (x) => x + 2), aplicar(5, (x) => x * 2)) // 7 10

function multiplicadorPor(n) {
    return (x) => x * n
}
const triple = multiplicadorPor(3)
console.log(triple(7)) // 21

