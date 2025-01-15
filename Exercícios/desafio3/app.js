// 1- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// calcularImc();

// function calcularImc(){
//     let peso = parseFloat(prompt('Qual o seu peso?'));
//     let altura = parseFloat(prompt('Qual a sua altura?'));

//     imc= peso/(altura*altura);

//     alert(imc);

//     if(imc<18.5){
//         alert('magreza');
//     }else{
//         if(imc>=18.5 && imc<25){
//             alert('normal');
//         }else{
//             if(imc>=25 && imc<30){
//                 alert('sobrepeso');
//             }else{
//                 if(imc>=30 && imc< 40){
//                     alert('obesidade');
//             }else{
//                 alert('obesidade grave');
//             }
//         }
//     }
// }
// }

// 2- Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// calcularFatorial();

// function calcularFatorial(){
//     let numero = parseInt(prompt('Digite um número inteiro'));
//     let resultado = 1;

//     while(numero>=1){
//         resultado = resultado*numero
//         numero--;
//     }
//     console.log(resultado);
// }

// 3- Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente 
// em reais. Para isso, considere a cotação do dólar igual a R$4,80.



// 4- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e 
// largura que serão dadas como pa;râmetro.

// 5- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que 
// será fornecido como parâmetro. Considere Pi = 3,14.

// 6- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// 1- Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// 2- Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

listaGenerica = ['JavaScript','C','C++', 'Kotlin' , 'Python'];
// 3- Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
console.log(listaGenerica)
listaGenerica.push('Java', 'Ruby' , 'GoLang');
console.log(listaGenerica)
// 4- Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.


// 5- Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.


// 6- Crie uma lista com 3 nomes e exiba no console apenas o último elemento.