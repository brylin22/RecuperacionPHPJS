$negocio = (function(){

    let datos  =  new Map();
    function agregarProducto(nombre, cantidad, precio, categoria){
        // let igual = datos.find(d=> d.nombre == nombre); 
        if(nombre in datos){
            return alert("El producto ya existe!"); 
        }

        // producto  = {cantidad, precio, categoria} ; 
        // datos.push(producto); 
        // datos[nombre]  = {cantidad, precio, categoria} ; 
        datos.set(nombre, {cantidad, precio, categoria});

       
    }
    function eliminarProducto(nombre){
        if(!nombre in datos){
            return alert("El producto no existe!"); 
        }
        // datos.delete("Queso");
         delete(datos.nombre); 
    }
    function buscarProducto(nombre){
        if(nombre in datos){
            return datos[nombre]; 
        }
        return alert("Producto no encontrado") ;
    }
    function actualizarInventario(nombre, cantidad){
        if(!nombre in datos){
            return; 
        }
        datos[nombre].cantidad = cantidad; 
        return alert("Cantidad actualizada"); 
    }
    function ordenarProductosPorPrecio(){
        
    }


    //devuevle colecciones de datos formateados
    return{
        agregarProducto,
        eliminarProducto
    }
    
})();

$negocio.agregarProducto("Queso", 12, 123, "lacteos");
$negocio.agregarProducto("salchica", 12, 123, "lacteos");
$negocio.agregarProducto("Queso", 12, 123, "lacteos");

$negocio.eliminarProducto("Queso");
$negocio.agregarProducto("Queso", 12, 123, "lacteos");