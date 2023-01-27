let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")


function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = carnePP(duracao)* adultos + carnePP(duracao)*criancas/2
    let qtdCerveja = cervejaPP(duracao)*adultos;
    let qtdBebidas = bebidaPP(duracao)*adultos + bebidaPP(duracao)*criancas/2

    resultado.innerHTML = `<p>${qtdCarne/1000} kg de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja/355)} latas de cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdBebidas/2000)} garrafas de refri </p>`
   
}

function carnePP(duracao){
    if(duracao>=6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao>=6){
        return 2000;
    } else{
        return 1200;
    }
}
function bebidaPP(duracao){
    if(duracao>=6){
        return 1500;
    } else{
        return 1000;
    }
}
