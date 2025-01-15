// 1- Criar uma função que exibe "Olá, mundo!" no console.
olaMundo();

function olaMundo(){
    return    console.log('Olá mundo');
}

// 2- Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
olaNome('Jailton');


function olaNome(nome){
    console.log(`Olá ${nome}`);
}

// 3- Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

dobro(4);
function dobro(num){
    console.log(num*2);
}

// 4- Criar uma função que recebe três números como parâmetros e retorna a média deles.
media(2,3,4);
function media(num1, num2, num3){
    console.log((num1+num2+num3)/3);
}

// 5- Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
maiorNumero(8,6);

function maiorNumero(n1,n2){
    if(n1>n2){
        console.log(n1);
    }else{
        console.log(n2);
    }
}

// 6- Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
multiplicaEleMesmo(5);
function multiplicaEleMesmo(n){
    console.log(n*n);
}