const registro =
  "  Café: 35.50; té verde : 28 ;Pan Dulce:18.5; CAFÉ:35.5;; galleta de avena: 22.10;  Té Verde:28 ; " +
  "Jugo de naranja: 40; pan dulce : 18.50; Café Americano: abc; galleta de avena:22.1; ;Jugo de Naranja:40 ; " +
  "Sándwich:55.75; té verde: -10; :15; Pan dulce:18.5; Café :35.5 ; Sándwich : 55.75 ; galleta de avena:";

const registroExtra = " Té: 10 ;; Agua:10; ñoño : 5,5 ; Pastel:0 ; Flan:3:4 ; ;;; ";

function quitarAcentos(texto) {
  const conAcento = "áéíóúü";
  const sinAcento = "aeiouu";
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    const posicion = conAcento.indexOf(texto[i]);
    if (posicion === -1) {
      resultado += texto[i];
    } else {
      resultado += sinAcento[posicion];
    }
  }
  return resultado;
}

function limpiarRegistro(texto) {
  const ventas = [];
  const pedazos = texto.split(";");
 
  for (let i = 0; i < pedazos.length; i++) {
    const partes = pedazos[i].split(":");

    if (partes.length !== 2) {
      continue;
    }

    let producto = partes[0].toLowerCase();
    producto = quitarAcentos(producto);
    producto = producto.trim().replace(/\s+/g, " ");

    const textoPrecio = partes[1].trim().replace(",", ".");
    const precio = Number(textoPrecio);

    if (producto === "" || textoPrecio === "" || isNaN(precio) || precio <= 0) {
      continue;
    }
 
    ventas.push({ producto: producto, precio: precio });
  }
 
  return ventas;
}

const sumar = function (...precios) {
  let total = 0;
  for (let i = 0; i < precios.length; i++) {
    total += precios[i];
  }
  return Math.round(total * 100) / 100;
};

const resumenPorProducto = (ventas) => {
  const acumulado = {};
 
  for (let i = 0; i < ventas.length; i++) {
    const venta = ventas[i];

    if (acumulado[venta.producto] === undefined) {
      acumulado[venta.producto] = { producto: venta.producto, veces: 0, ingreso: 0 };
    }
 
    acumulado[venta.producto].veces += 1;
    acumulado[venta.producto].ingreso = sumar(acumulado[venta.producto].ingreso, venta.precio);
  }
 
  const resumen = Object.values(acumulado);

  resumen.sort((a, b) => {
    if (b.ingreso !== a.ingreso) {
      return b.ingreso - a.ingreso;
    }
    return a.producto.localeCompare(b.producto, "es");
  });
 
  return resumen;
};

function descuento(precio, porcentaje = 15) {
  const nuevoPrecio = precio - precio * (porcentaje / 100);
  return Math.round(nuevoPrecio * 100) / 100;
}

function aplicarATodos(lista, fn) {
  const resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(fn(lista[i]));
  }
  return resultado;
}

function productoAlAzar(ventas) {
  const productos = [];
 
  // Armar la lista de productos distintos
  for (let i = 0; i < ventas.length; i++) {
    if (!productos.includes(ventas[i].producto)) {
      productos.push(ventas[i].producto);
    }
  }
 
  if (productos.length === 0) {
    return null;
  }
 
  const indice = Math.floor(Math.random() * productos.length);
  return productos[indice];
}

console.log("--- Pruebas ---");
console.log("limpiarRegistro(registroExtra):", limpiarRegistro(registroExtra));
console.log("limpiarRegistro(''):", limpiarRegistro(""));
console.log("limpiarRegistro(';;;'):", limpiarRegistro(";;;"));
console.log("sumar(0.1, 0.2, 0.3):", sumar(0.1, 0.2, 0.3));
console.log("sumar():", sumar());
console.log("descuento(200):", descuento(200), "(15% por defecto)");
console.log("descuento(200, 50):", descuento(200, 50));
console.log("aplicarATodos([100, 50, 20], descuento):", aplicarATodos([100, 50, 20], descuento));
console.log(
  "resumen con empate (Té y Agua = 10):",
  resumenPorProducto(limpiarRegistro(registroExtra))
);
console.log("");

const ventas = limpiarRegistro(registro);
const resumen = resumenPorProducto(ventas);
const precios = [];

for (let i = 0; i < ventas.length; i++) {
  precios.push(ventas[i].precio);
}
const total = sumar(...precios);

const promocion = productoAlAzar(ventas);
 
console.log("===== REPORTE DE VENTAS DEL DÍA =====");
for (let i = 0; i < resumen.length; i++) {
  const r = resumen[i];
  console.log(r.producto + ": " + r.veces + " vendido(s) - $" + r.ingreso.toFixed(2));
}
console.log("-------------------------------------");
console.log("TOTAL DEL DÍA: $" + total.toFixed(2));
console.log("PRODUCTO DE LA PROMOCIÓN: " + promocion);

const preciosUnitarios = aplicarATodos(resumen, function (r) {
  return r.ingreso / r.veces;
});
const preciosConDescuento = aplicarATodos(preciosUnitarios, descuento);
 
console.log("");
console.log("Precios con 15% de descuento:");
for (let i = 0; i < resumen.length; i++) {
  console.log(
    resumen[i].producto + ": $" + preciosUnitarios[i].toFixed(2) +
    " -> $" + preciosConDescuento[i].toFixed(2)
  );
} 