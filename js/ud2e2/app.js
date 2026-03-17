let negocio = (function () {
  datos = {
    manzana: { cantidad: 10, precio: 10, categoria: "fruta" },
    pera: { cantidad: 10, precio: 10, categoria: "fruta" },
    kiwi: { cantidad: 10, precio: 10, categoria: "fruta" },
    platano: { cantidad: 10, precio: 10, categoria: "fruta" },
    melocoton: { cantidad: 10, precio: 10, categoria: "fruta" },
  };

  function agregarProducto(nombre, cantidad, precio, categoria) {
    //compruebo que el producto no está
    if (nombre in datos) {
      return alert("El producto ya existe!");
    }
    //añado el producto
    datos[nombre] = { cantidad, precio, categoria };
  }

  function eliminarProducto(nombre) {
    //compruebo que NO este
    if (!(nombre in datos)) {
      //si no esta
      return alert("El producto NO existe para borrar");
    }

    delete datos[nombre]; // la borro con la funcion de ale
  }
  function buscarProducto(nombre) {
    //devuelve la información del objeto, no hace falta devolver la clave
    //verifico si exite
    if (!(nombre in datos)) {
      return alert("El producto no existe!");
    }
    //sabemos que existe
    //dice que devulve un objeto, podemos devolver el obejto de la map directamente
    return datos[nombre];
  }
  function actualizarInventario(nombre, cantidad) {
    //verifico si existe
    if (!(nombre in datos)) {
      return alert("No existe");
    }
    //reemplazo de forma básica
    datos[nombre].cantidad += cantidad; //sumo la cantidad o resto si es negativa
    if (datos[nombre].cantidad <= 0) {
      return alert("Nos hemos quedado sin reservas! Repon");
    }
  }
  function ordenarProductosPorPrecio() {
    //ordenador
    let lista = Object.values(datos); //cogo los valores de forma fácil con esto
    //tengo los objetos, puedo recorrerlos
    let resultado = [];
    //   for (let i = 0; i < lista.length; i++) {

    // }
    //ahora puedo filtrarlo con método de arrays
    lista.sort(function (a, b) {
      return a.precio - b.precio;
    });
    return lista;
  }
  function imprimirInventario() {
    // sacar todo
    let lista = Object.entries(datos); //como el anterior pero cojo la clave también
    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
      // cojo la clave y el objeto
      let nombre = lista[i][0];
      let producto = lista[i][1];

      //tengo que sacar el total y consturir un objeto nuevo con los datos
      let cantidad = producto.cantidad;
      let precio = producto.precio;
      let categoria = producto.categoria;
      let total = precio * cantidad;
      //construyo el objeto que vlamos a devovl
      let nuevo = {
        nombre: nombre,
        cantidad: cantidad,
        categoria: categoria,
        precio: precio,
        total: total,
      };
      resultado.push(nuevo);
    }
    return resultado;
  }
  function filtrarProductosPorCategoria(cat) {
    //lo mismo que el anterior
    // pero filtrando
    let lista = Object.entries(datos);
    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
      let nombre = lista[i][0]; //recuerda el i para indicar el objeto, nuermo para la propiedad
      //
      let producto = lista[i][1];
      //saco las propiedades y fltro por categoria
      let cantidad = producto.cantidad;
      let precio = producto.precio;
      let categoria = producto.categoria;
      if (categoria == cat) {
        let nuevo = {
          nombre: nombre,
          cantidad: cantidad,
          precio: precio,
        };
        resultado.push(nuevo);
      }
    }
    return resultado;
  }

  return {
    agregarProducto,
    eliminarProducto,
    buscarProducto,
    actualizarInventario,
    ordenarProductosPorPrecio,
    imprimirInventario,
    filtrarProductosPorCategoria,
  };
})();

//prueba del codigo:

negocio.agregarProducto("queso", 10, 10, "lacteos");
negocio.eliminarProducto("queso", 10, 10, "lacteos");
negocio.buscarProducto("manzana");
negocio.actualizarInventario("manzana", 201);
negocio.ordenarProductosPorPrecio();
negocio.imprimirInventario();
negocio.filtrarProductosPorCategoria("fruta");

function cargar() {
  let contenedor = document.querySelector(".contenedor");
  let inventario = document.createElement("div");

  let dats = JSON.stringify(negocio.imprimirInventario());
  inventario.innerHTML = dats;
  contenedor.appendChild(inventario);
  asignarManejadores();
}
function enviar() {}
document.addEventListener("DOMContentLoaded", () => {
  cargar();
});

function asignarManejadores() {
  let botones = document.querySelectorAll("button");
  botones.forEach((b) => {
    //por cada boton
    switch (b.className) {
      case "agregar": {
        b.addEventListener("click", agregar);
        break;
      }
      case "eliminar": {
        b.addEventListener("click", eliminar);
        break;
      }
      case "buscar": {
        b.addEventListener("click", buscar);
        break;
      }
      case "actualizar": {
        b.addEventListener("click", actualizar);
        break;
      }
      case "ordenar": {
        b.addEventListener("click", ordenar);
        break;
      }
      case "actualizar": {
        b.addEventListener("click", actualizar);
        break;
      }
      case "imprimir": {
        b.addEventListener("click", imprimir);
        break;
      }
      case "filtrar": {
        b.addEventListener("click", filtrar);
        break;
      }
    }
  });
  function agregar() {
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    let categoria = document.getElementById("categoria").value;
    negocio.agregarProducto(nombre, cantidad, precio, categoria);
    imprimir();
  }
  function eliminar() {
    let nombre = document.getElementById("nombre").value;

    negocio.eliminarProducto(nombre);
    imprimir();
  }
  function actualizar() {
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;

    negocio.agregarProducto(nombre, cantidad);
    imprimir();
  }
  function buscar() {
    let nombre = document.getElementById("nombre").value;

    ordenados = JSON.stringify(negocio.buscarProducto(nombre));

    //salida
    let salida = document.querySelector(".salida");
    salida.innerHTML = ordenados;
  }
  function ordenar() {
    let ordenados = JSON.stringify(negocio.ordenarProductosPorPrecio());
    //salida
    let salida = document.querySelector(".salida");
    salida.innerHTML = ordenados;
  }
  function imprimir() {
    let contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "";
    let inventario = document.createElement("div");

    let dats = JSON.stringify(negocio.imprimirInventario());
    inventario.innerHTML = dats;
    contenedor.appendChild(inventario);
  }

  function filtrar() {
    let categoria = document.getElementById("categoria").value;
    ordenados = JSON.stringify(negocio.filtrarProductosPorCategoria(categoria));

    //salida
    let salida = document.querySelector(".salida");
    salida.innerHTML = ordenados;
  }
}
