let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');

function adicao(){
    let num1 = parseInt(prompt('Digite o primeiro numero!'));
    let num2 = parseInt(prompt('Digite o segundo número!'));

    resultado= num1+num2;

    titulo.innerHTML = 'Adição';
    paragrafo.innerHTML = `${num1} + ${num2} =  ${resultado}`;

}

function subtracao(){
    let num1 = parseInt(prompt('Digite o primeiro numero!'));
    let num2 = parseInt(prompt('Digite o segundo número!'));

    resultado= num1-num2;
    titulo.innerHTML = 'Subtração';
    paragrafo.innerHTML = `${num1} - ${num2} =  ${resultado}`;
}

function multiplicacao(){
    let num1 = parseInt(prompt('Digite o primeiro numero!'));
    let num2 = parseInt(prompt('Digite o segundo número!'));

    resultado= num1*num2;

    titulo.innerHTML = 'Multiplicação';
    paragrafo.innerHTML = `${num1} x ${num2} =  ${resultado}`;
}

function divisao(){
    let num1 = parseInt(prompt('Digite o primeiro numero!'));
    let num2 = parseInt(prompt('Digite o segundo número!'));

    resultado= num1/num2;

    titulo.innerHTML = 'Divisão';
    paragrafo.innerHTML = `${num1}: ${num2} =  ${resultado}`;
}

let count = 1;

while(count<=100){
    console.log(count);
    count++;
}
