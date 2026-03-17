function jugarDados(numeroLados = 0){
    
    function tirarDado(){
        let factor = Math.round(Math.random());
        let numero = Math.floor(Math.random()*numeroLados);
        return numero; 
    }
    return function (){
        let resultado =    [];
        resultado.push(tirarDado());
        resultado.push(tirarDado());
        return resultado;

    };
}


let nLados = parseInt(prompt("Introduce el numero de lados del dados: "));
let nTiradas = parseInt(prompt("Introduce el numero de tiradas que quieres hacer: "));
let tablero = jugarDados(nLados);

let resultadoJugador  = []; 
let resultadoMaquina = [];
let victoriasJugador = 0; 
let victoriasMaquina = 0; 
for(let i = 0; i < nTiradas; i++){
    // por cada partida 
    let resultadoTemporalJugador = tablero(nLados); 
    let resultadoTemporalMaquina = tablero(nLados); 



    //lo mando a los resultado de los jugadoeres
    resultadoJugador.push(resultadoTemporalJugador); 
    resultadoMaquina.push(resultadoTemporalMaquina); 
    // comparar resultados 
    let totalJugador = resultadoTemporalJugador[0] + resultadoTemporalJugador[1]; 
    let totalMaquina = resultadoTemporalMaquina[0] + resultadoTemporalMaquina[1]; 
    if(totalJugador>totalMaquina){
        victoriasJugador++; 
    }else if(totalJugador < totalMaquina){
        victoriasMaquina++; 
    }else{
        // empate
    }
    //muestro los resultado de cada ronda según sucenden
    alert(`Resultado del jugador: `+   totalJugador); 
    alert(`Resultado Maquina: ` + totalMaquina);
    console.log("Sigue la ejecucción: " + i); 

}
if(victoriasJugador > victoriasMaquina){
    alert("Has ganado, has obtenido: " + victoriasJugador); 
}else if(victoriasMaquina < victoriasJugador){
    alert("Ha ganado la maquina...: " + victoriasMaquina); 

}//estadisticas
alert(`Resultados del jugador: ${resultadoJugador},\n 
    Restados de la maquina: ${resultadoMaquina},\n
    Victorias del jugador: ${victoriasJugador}, \n
    Victorias Maquina:  ${victoriasMaquina}, \n
    Partidas Jugadas: ${nTiradas}` );
