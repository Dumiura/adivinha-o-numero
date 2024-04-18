// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//começa agora daqui o código......
let listaDeNumeroSorteados
let numeroSecreto = gararNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');    
}

exibirMensagemInicial();

function verificarChute()  {
    let chute = document.querySelector('input').value; 
    

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero é menor');
            
        } else {
            exibirTextoNaTela('p', 'O numero é maior');
        }
        tentativas++;
        limparCampo();
    }

}

function gararNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1 ); 
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
    
}

function reiniciarJogo() {
    numeroSecreto = gararNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}