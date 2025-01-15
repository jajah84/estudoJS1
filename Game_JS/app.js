//selecionar a tag do html
// let titulo = document.querySelector('h1');
// //inserindo valor na tag html
// titulo.innerHTML = 'Jogo do número secreto.';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML ='Digite um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 100;

let tentativas = 1;

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

exibirMensagemInicial();

function exibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})

}

function exibirMensagemInicial(){
    exibirNaTela('h1','Jogo do número secreto');
    exibirNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);
}

//função com retorno
function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random()*numeroLimite+1);
    let quantidadeElementosLista = numeroLimite;

    if(quantidadeElementosLista ==numeroLimite){
        listaDeNumerosSorteados =[];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}



//criar uma função para interagir com o botão chutar
function verificarChute(){
    //console.log('O botão foi clicado!');
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
    let mensagem = `Você acertou o número secreto. Com ${tentativas} ${palavraTentativa}.`;

    if(chute==numeroSecreto){
        exibirNaTela('h1','Acertou!');
        exibirNaTela('p',mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute>numeroSecreto){
            exibirNaTela('p','O número secreto é menor!');
        }else{
            exibirNaTela('p','O número secreto é maior!');
        };
        tentativas++;
        limpaCampo();
    }
}

function limpaCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas=1;
    console.log(numeroSecreto);
    exibirMensagemInicial();
}