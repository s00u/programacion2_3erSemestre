    let lista = ["hola", "como", "estas"]

console.log(lista)

lista.pop

console.log(lista)

lista.push("mediodetortillas")

console.log(lista)

lista.push("doskilosdetomate")

console.log(lista)

lista.unshift("emiliano")

console.log(lista)

lista.shift

console.log(lista)

lista.splice(3, 1, "comoestas")

console.log(lista)

const b  =  [1,2,3,4,5];
console.log(b.splice(1,2));
// [2,3]

console.log(b);
// [1,4,5]

b.splice(1,0,"x","y");
console.log(b);
// [1, 'x', 'y'] (b no cambia)

const n = [5,23,8,130,44]
n.indexOf(8) //2
n.includes(130) //true
n.find((x) => x >20) //12
n.findIndex((x) => x > 10) // 1
n.find((x) => x > 1000) // undefined pq no hay numero mayor a mil en la lista
n.some((x) => x > 100) // true
n.every((x) => x >5) // false

const precios = [100,250,80,400]
precios.map((p) => p + 20) //
precios.filter((p) => p > 150)
precios.reduce((acum, p) => acum + p, 0)

const nums = [10,9,1,100];
[...nums].sort();

[...nums].sort((a,b) => a - b);

[...nums].sort((a,b) => b - a)

