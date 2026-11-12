//devuelve true o false. Cuida los casos 0, 1 y los negativos

function esPrimo(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


//Convierte entre C, F y K y devuelve un numero
function convertirTemperatura(v, de, a){

let conversion = 0

    if (de == "c" || de == "C" && a == "F" || a == "f"){
        conversion = (v * (9/5)) + 32;
    }

    if (de == "f" || de == "F" && a == "C" || a == "c"){
        conversion = (v - 32) * (5/9);
    }

    if (de == "K" || de == "k" && a == "F" || a == "f"){
        conversion = (v - 273.15) * (9/5) + 32;
    }

    if (de == "F" || de == "f" && a == "K" || a == "k"){
        conversion = (v + 273.15) * (9/5);
    }

    if (de == "c" || de == "C" && a == "K" || a == "k"){
        conversion = v + 273.15;
    }

    if (de == "k" || de == "K" && a == "C" || a == "c"){
        conversion = v + 273.15;
    }

    console.log(conversion)
}

console.log(esPrimo(7))
console.log(esPrimo(1))

convertirTemperatura(100, "C", "F")
convertirTemperatura(0, "c", "k")