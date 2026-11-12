function descuento(precio, porcentaje = 10){
    return (porcentaje / 100) * precio
}

function promedio(...notas){
    const suma = notas.reduce((a, b) => a + b, 0)
    const total = notas.length
    return (suma / total)
}

function aplicarDosVeces(valor, fn) {
    return fn(fn(valor))
}

console.log(descuento(200, 25))
console.log(descuento(200))

console.log(promedio(7,9,10,7))

console.log(aplicarDosVeces(15, (x) => x - 5))