$negocio = (function () {
  let datos = {
    manzana: { cantidad: 10, precio: 22, categoria: "fruta" },
  };
  function agregarProducto(nombre, cantidad, precio, categoria) {
    // let igual = datos.find(d=> d.nombre == nombre);
    if (nombre in datos) {
      return alert("El producto ya existe!");
    }

    // producto  = {cantidad, precio, categoria} ;
    // datos.push(producto);
    // datos[nombre]  = {cantidad, precio, categoria} ;
    datos[nombre] = { cantidad, precio, categoria };
  }
  function eliminarProducto(nombre) {
    if (!(nombre in datos)) {
      return alert("El producto no existe!");
    }
    // datos.delete("Queso");
    delete datos[nombre];
  }
  function buscarProducto(nombre) {
    if (nombre in datos) {
      return datos[nombre];
    }
    return alert("Producto no encontrado");
  }
  function actualizarInventario(nombre, cantidad) {
    if ((!nombre) in datos) {
      return;
    }
    datos[nombre].cantidad += cantidad;
    return alert("Cantidad actualizada");
  }
  function ordenarProductosPorPrecio() {
    //para ordenador tengo que convertirlo a un array
    const lista = Object.values(datos); // pierdo el nombre, cojo solo el objeto
    //ordeno con sort
    lista.sort(function (a, b) {
      return a.precio - b.precio;
    });
    return lista;
  }
  function imprimirInventario() {
    //sacamos los datos de la colección
    const lista = Object.entries(datos); //tenemos la clave + datos
    let resultado = [];
    //recorremos la lsita
    for (let i = 0; i < lista.length; i++) {
      let nombre = lista[i][0]; //aqui esta el nombre (string)
      let producto = lista[i][1]; //aquí estan las propiedades

      let cantidad = producto.cantidad;
      let precio = producto.precio;
      let categoria = producto.categoria;

      let total = cantidad * precio;
      let nuevo = {
        nombre: nombre,
        categoria: categoria,
        cantidad: cantidad,
        precio: precio,
        total: total,
      };
      resultado.push(nuevo);
    }
    return resultado;
  }
  function filtrarProductos(cat) {
    const lista = Object.entries(datos);
    let resultado = [];
    for (let i = 0; i < lista.length; i++) {
      let nombre = lista[i][0];
      let producto = lista[i][1];

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

  //devuevle colecciones de datos formateados
  return {
    agregarProducto,
    eliminarProducto,
    ordenarProductosPorPrecio,
    imprimirInventario,
    filtrarProductos,
  };
})();

$negocio.agregarProducto("Queso", 12, 123, "lacteos");
$negocio.agregarProducto("salchica", 12, 123, "lacteos");
$negocio.agregarProducto("Queso", 12, 123, "lacteos");

$negocio.eliminarProducto("Queso");
$negocio.agregarProducto("Queso", 12, 123, "lacteos");
$negocio.agregarProducto("manzana", 12, 22, "fruta");
let ordenados = $negocio.ordenarProductosPorPrecio();
let imprime = $negocio.imprimirInventario();
let filtra = $negocio.filtrarProductos("fruta");
