// se trabaja con funciones para trabajar con json

//notas de 0 a 10
// convocatorias de 1 a 4
// nombre

const prueba = [
  { nombre: "Brylin", nota: 8, modulo: "DWES", convocatorias: 4 },
  { nombre: "Goldberg", nota: 8, modulo: "DWEC", convocatorias: 4 },
  { nombre: "David", nota: 5, modulo: "DWES", convocatorias: 4 },
  { nombre: "Fer", nota: 4, modulo: "DWEC", convocatorias: 4 },
  { nombre: "Nando", nota: 2, modulo: "DWES", convocatorias: 4 },
];

const $yedra = (function () {
  function alumnosSuspnesos() {
    //sacar los alumnos suspendiedos
    let suspensos = [];
    let datos = [...prueba];
    for (const alumno of datos) {
      if (alumno.nota < 5) {
        let nuevoAlumno = alumno; // se esta jodiendo todo por esta linea
        //para que los datos no sean la misma referencia hay que ahcer
        nuevoAlumno = { ...alumno };
        delete nuevoAlumno.convocatorias; // mirado
        //ELIMINA EL NUEVO NO EL VIEJO
        suspensos.push(nuevoAlumno);
      }
    }
    //ordenar el resultado

    //   suspensos.sort((a, b) => a.nombre - b.nombre);
    //manera correcta de ordenar por nombre
    suspensos.sort((a, b) => a.nombre.localeCompare(b.nombre)); //localcompare
    console.log(suspensos);
    return suspensos;
  }
  function estadisticas() {
    let notaTotalS = 0;
    let notaTotalC = 0;
    let notaConvS = 0;
    let notaConvC = 0;
    let cantidadS = 0;
    let cantidadC = 0;

    for (let alumno of prueba) {
      if (alumno.modulo == "DWES") {
        notaTotalS += alumno.nota;
        notaConvS += Number(alumno.convocatorias);
        cantidadS++;
      } else if (alumno.modulo == "DWEC") {
        notaTotalC += alumno.nota;
        notaConvC += Number(alumno.convocatorias);
        cantidadC++;
      }
    }
    // sacamos la media
    notaTotalS = Math.trunc(notaTotalS / cantidadS);
    notaTotalC = Math.trunc(notaTotalC / cantidadC);

    notaConvS = Math.trunc(notaConvS / cantidadS);
    notaConvC = Math.trunc(notaConvC / cantidadC);

    let resultado = [
      { nombre: "DWES", mediaNota: notaTotalS, mediaConv: notaConvS },
      { nombre: "DWEC", mediaNota: notaTotalC, mediaConv: notaConvC },
    ];
    resultado.sort((a, b) => b.mediaConv - a.mediaConv);
    return resultado;
  }
  function datosAlumnos() {
    //devolver json
    let datos = JSON.stringify(prueba);
    return datos;
  }
  function cargar(cadena) {
    try {
      let convertido = JSON.parse(cadena);
      if (!Array.isArray(convertido)) {
        return "No es un array! no se puede seugir!";
      }
      prueba.push(...convertido); // esto para meterlo bien
      return "Los datos se han añadido correctamente!";
    } catch (error) {
      return "Hubo u error desconocido, no se puedo converti";
    }
  }

  return {
    alumnosSuspnesos,
    estadisticas,
    datosAlumnos,
    cargar,
  };
})();

$yedra.alumnosSuspnesos();
$yedra.estadisticas();
$yedra.cargar(
  '[{"nombre": "bayo","nota": 8, "modulo" : "DWES", "convocatorias": 4 }]',
);
$yedra.datosAlumnos();

window.addEventListener("load", init);
function init() {
  cargarDatos();
  app();
  asignarManejadores();
}
function cargarDatos() {
  //hace display de todos los datos
  let datosCon = document.querySelector(".datos");
  datosCon.innerHTML = $yedra.datosAlumnos();
}
function app() {
  let contenedor = document.querySelector(".contenedor");
  contenedor.innerHTML = `
    <button class="datos">Refrescar Datos</button>
    <button class="suspensos" >Ver Alumnos Suspensos</button>
    <button class="estadisticas" >Ver Estadísticas</button>
    <br>
    <button class="cargar" >Cargar</button>
    <br>
    <input  type="text" value='[{"nombre": "bayo","nota":4, "modulo" : "DWES", "convocatorias": 4 }]'/>
    
    
    `;
}
function asignarManejadores() {
  document.querySelector(".datos").addEventListener("click", datos);
  document.querySelector(".suspensos").addEventListener("click", suspensos);
  document
    .querySelector(".estadisticas")
    .addEventListener("click", estadisticas);
  document.querySelector(".cargar").addEventListener("click", cargar);
}
function datos() {
  $yedra.datosAlumnos();
  cargarDatos();
}
function suspensos() {
  let datos = $yedra.alumnosSuspnesos();
  datos = JSON.stringify(datos);
  let salida = document.querySelector(".salida");
  salida.innerHTML = datos;
  cargarDatos();
}
function estadisticas() {
  let datos = $yedra.estadisticas();
  datos = JSON.stringify(datos);
  let salida = document.querySelector(".salida");
  salida.innerHTML = datos;
  cargarDatos();
}
function cargar() {
  let entrada = document.querySelector("input");
  let texto = entrada.value;
  let resultado = $yedra.cargar(texto);
  let salida = document.querySelector(".salida");
  salida.innerHTML = resultado;
  cargarDatos();
}
