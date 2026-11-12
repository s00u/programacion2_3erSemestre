//return corta la funcion en ese punto y entrega un valor.
//Sin return, la funcion devuelve undeined

function sinRetorno(x) { x * 2 }
function conRetorno(x) { return x * 2; }
function signo(n) {
    if (n < 0) return "negativo";
    if (n === 0) return "cero";
    return "positivo"
}
 //sinRetorno(4) -> undefined * conRetorno(4) -> 8 * signo(-3), signo(0)


 //Una funcion devuelve un solo valor. Para devolver varios, empaquetalos en un objeto.
 //Quien llama los separa con desestructuracion

 function estadisticas(lista) {
    const minimo = Math.min(...lista);
    const maximo = Math.max(...lista);
    const suma = lista.reduce((a, b) => a + b, 0);
    return { minimo, maximo, promedio: suma / lista.length };
 }
 const { minimo, maximo, promedio } = estadisticas([4, 8, 6]);
 console.log(minimo, maximo, promedio);
 // -> 4 8 6

 //Calcular o mostrar, no las dos
 //Pura: Mismos argumentos, mismo resultado, y nada cambia fuera de ella. Facil de probar.
const conIva = (p) => Math.round(p * 116) / 100;
 //Con efecto secundario: Imprime, modifica una variable externa o cambia la pagina. Necesaria, pero va aparte
 console.log("total", conIva(100));
 //-> total 116

 //Trampa: salto de linea tras return
 function mal(){
    return
    42;
 }
 // mal() -> undefined