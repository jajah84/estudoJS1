let titulo = document.querySelector('h1');
titulo.innerHTML = 'Testando js no html';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Se liga nessa zoeira';

function clicaOi() {
    alert('Olá Jajah!');
}

function clicaSoma() {
    let num1 = parseInt(prompt('Digite o primeiro número!'));
    let num2 =parseInt(prompt('Digite o segundo numero'));
    resultado = num1 + num2;
    
    alert(`${num1} + ${num2} = ${resultado}`);
}

function clicaSubrair() {
    let num1 = parseInt(prompt('Digite o primeiro numero'));
    let num2 = parseInt(prompt('Digite o segundo numero'))
    resultado = num1 - num2;

    alert(`${num1} - ${num2} = ${resultado}`);

}