let calificaciones = [4 , 6, 5, 9, 10, 8]

let aprobados = calificaciones.filter((p) => p >= 60);
let totalAprobados = aprobados.reduce((acum, p) => acum + p, 0);

let promedio = totalAprobados / aprobados.length;

console.log("calificaciones aprobatorias: " + aprobados + "el promedio de los aprobados es: " + promedio)

let numeros = [1,2,3,4,5,6,67,69,420,666,777]

let pares = numeros.filter((p) => p % 2 === 0);
let cuadrados = pares.map((p), p => p**2);

console.log("numeros pares: " + pares + " cuadrados: " + cuadrados);

let nombres = ["Emiliano", "Aly","Cristopher", "arbol", "comidita"];

nombres.toLowerCase();

let ordenados = nombres.sort();

console.log(ordenados);