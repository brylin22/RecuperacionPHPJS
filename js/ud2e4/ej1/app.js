function jugarDados(numeroLados = 0) {
  function tirarDado() {
    let factor = Math.round(Math.random());
    let numero = Math.floor(Math.random() * numeroLados);
    return numero;
  }
  return function () {
    let resultado = [];
    resultado.push(tirarDado());
    resultado.push(tirarDado());
    return resultado;
  };
}

function jugarPartida() {
  let nLados = parseInt(prompt("Introduce el numero de lados del dados: "));
  let nTiradas = parseInt(
    prompt("Introduce el numero de tiradas que quieres hacer: "),
  );
  let tablero = jugarDados(nLados);

  let resultadoJugador = [];
  let resultadoMaquina = [];
  let victoriasJugador = 0;
  let victoriasMaquina = 0;
  for (let i = 0; i < nTiradas; i++) {
    // por cada partida
    let resultadoTemporalJugador = tablero(nLados);
    let resultadoTemporalMaquina = tablero(nLados);

    //lo mando a los resultado de los jugadoeres
    resultadoJugador.push(resultadoTemporalJugador);
    resultadoMaquina.push(resultadoTemporalMaquina);
    // comparar resultados
    let totalJugador =
      resultadoTemporalJugador[0] + resultadoTemporalJugador[1];
    let totalMaquina =
      resultadoTemporalMaquina[0] + resultadoTemporalMaquina[1];
    if (totalJugador > totalMaquina) {
      victoriasJugador++;
    } else if (totalJugador < totalMaquina) {
      victoriasMaquina++;
    } else {
      // empate
    }
    //muestro los resultado de cada ronda según sucenden
    alert(`Resultado del jugador: ` + totalJugador);
    alert(`Resultado Maquina: ` + totalMaquina);
    console.log("Sigue la ejecucción: " + i);
  }
  if (victoriasJugador > victoriasMaquina) {
    alert("Has ganado, has obtenido: " + victoriasJugador);
  } else if (victoriasMaquina < victoriasJugador) {
    alert("Ha ganado la maquina...: " + victoriasMaquina);
  } //estadisticas
  alert(`Resultados del jugador: ${resultadoJugador},\n 
    Restados de la maquina: ${resultadoMaquina},\n
    Victorias del jugador: ${victoriasJugador}, \n
    Victorias Maquina:  ${victoriasMaquina}, \n
    Partidas Jugadas: ${nTiradas}`);
}
//variables globales de la app
let estado = true;
let resultadoJugador = [];
let resultadoMaquina = [];
let victoriasJugador = 0;
let victoriasMaquina = 0;
let nLados = 0;
let nTiradas = 0;
let tablero = null;
let FinalJugador = 0;
let FinalMaquina = 0;

function jugarPartidaHTML() {
  //vay a hacer que puedas seguir si quieres, se reiniciará
  //cuando vuelvas a jugar
  //   btnAcabar.disabled = true;
  resultadoJugador = [];
  resultadoMaquina = [];
  victoriasJugador = 0;
  victoriasMaquina = 0;
  nTiradas = 0;
  ((FinalJugador = 0), (FinalMaquina = 0));
  nLados = 0;
  let partida = document.querySelector(".partida");
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";
  partida.innerHTML = "";
  let btnTirar = document.createElement("button");

  let btnAcabar = document.createElement("button");
  btnTirar.textContent = "Hacer Tirada";
  btnTirar.className = "tirar";
  btnAcabar.textContent = "Dejar de jugar";
  btnAcabar.className = "acabar";

  nLados = parseInt(prompt("Introduce el numero de lados del dados: "));
  alert("Ahora puedes tirar hasta que quieras!");
  stats();

  tablero = jugarDados(nLados);

  partida.append(btnTirar);
  partida.append(btnAcabar);

  asignarManejadores();
}

window.addEventListener("load", cargar);

function cargar() {
  console.log("carga");
  asignarManejadores();
}

function asignarManejadores() {
  let btnJugar = document.getElementById("jugar");
  btnJugar.addEventListener("click", jugarPartidaHTML);

  let btnTirar = document.querySelector(".tirar");
  btnTirar.addEventListener("click", tirar);

  let btnAcabar = document.querySelector(".acabar");
  btnAcabar.addEventListener("click", salir);
}
function stats() {
  let ganadas = document.querySelector(".ganadas");
  let perdidas = document.querySelector(".perdidas");
  let caras = document.querySelector(".cara");
  ganadas.textContent = `Pardias ganadas: ${victoriasJugador}`;
  perdidas.textContent = `Partidas perdidas: ${victoriasMaquina}`;
  caras.textContent = `Jugando con ${nLados} caras.`;
}
function tirar() {
  let resultadoTemporalJugador = tablero(nLados);
  let resultadoTemporalMaquina = tablero(nLados);
  //lo mando a los resultado de los jugadoeres
  resultadoJugador.push(resultadoTemporalJugador);
  resultadoMaquina.push(resultadoTemporalMaquina);
  let totalJugador = resultadoTemporalJugador[0] + resultadoTemporalJugador[1];
  FinalJugador += totalJugador;
  let totalMaquina = resultadoTemporalMaquina[0] + resultadoTemporalMaquina[1];
  FinalMaquina += totalMaquina;
  if (totalJugador > totalMaquina) {
    victoriasJugador++;
  } else if (totalJugador < totalMaquina) {
    victoriasMaquina++;
  } else {
    // empate
  }

  let partida = document.querySelector(".partida");
  nTiradas++;
  let html = `<br>Resultado del jugador:  ${totalJugador} \n<br>
        Resultado Maquina:  ${totalMaquina}\n<br>`;
  partida.insertAdjacentHTML("beforeend", html);
  stats();
}

function salir() {
  estado = false;
  let resultado = document.querySelector(".resultado");

  resultado.innerHTML = `<h3>Resultados del jugador: ${resultadoJugador},\n
  <br>Total Jugador: ${FinalJugador}, <br>\n

    Restados de la maquina: ${resultadoMaquina},\n<br>
    Total Maquina: ${FinalMaquina}, <br>
    Victorias del jugador: ${victoriasJugador}, \n<br>
    Victorias Maquina:  ${victoriasMaquina}, \n<br>
    Partidas Jugadas: ${nTiradas}<br>`;
  if (victoriasJugador > victoriasMaquina) {
    alert(
      "Has ganado, has obtenido: " +
        victoriasJugador +
        " a " +
        victoriasMaquina,
    );
  } else if (victoriasMaquina > victoriasJugador) {
    alert(
      "Ha ganado la maquina...: " + victoriasJugador + " a " + victoriasMaquina,
    );
  } //estadisticas
  else {
    alert("Habeis quedado empate!");
  }
  let btnAcabar = document.querySelector(".acabar");
  //vay a hacer que puedas seguir si quieres, se reiniciará
  //cuando vuelvas a jugar
  //   btnAcabar.disabled = true;
  //   resultadoJugador = [];
  //   resultadoMaquina = [];
  //   victoriasJugador = 0;
  //   victoriasMaquina = 0;
  //   nTiradas = 0;
  //   ((FinalJugador = 0), (FinalMaquina = 0));
  //   nLados = 0;

  cargar();
}
