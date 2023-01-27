let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")


function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdCarne = carnePP(duracao)* adultos + carnePP(duracao)*criancas/2


    console.log(qtdCarne)
}

function carnePP(duracao){
    let carne = 400;
    if(duracao>=6){
        return 650
    } else{
        return 400
    }
}
