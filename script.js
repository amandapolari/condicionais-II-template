// PRÁTICA GUIADA I

// const idadeDependente = Number(prompt('Qual é a idade do dependente'));
// let mensagem = 'Consulte outras opções do Labenk'

// A) IF ANINHADO
// if (idadeDependente>=13) {
//     if(idadeDependente<18){
//         console.log('Cartão de crédito para dependente aprovado');
//     } else {
//         console.log('MAIOR DE IDADE:',mensagem);
//     }
// } else {
//     console.log('ABAIXO DA IDADE:',mensagem);
// }

// B) IF COM OPERADORES LÓGICOS
// if(idadeDependente >= 13 && idadeDependente < 18) {
//     console.log('Cartão de crédito para dependente aprovado');
// } else {
//     console.log(mensagem);
// }

// PRÁTICA GUIADA II
// IF TERNÁRIO
// condição ? expr1 : expr2
// idadeDependente===13 ? console.log('A idade do dependente é 13 e já pode ter um cartão') : console.log(mensagem);

// PRÁTICA GUIADA III
//  switch-case
// let number

// const tipoCartao = Number(prompt('Digite o número do ramal'));

// switch(tipoCartao) {
//     case 1:
//         console.log('Fácil')
//         break;
//     case 2:
//         console.log('Black')
//         break;
//     case 3:
//         console.log('Platinum')
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log('Master Gold')
//         break;
//     default:
//         console.log('Escolha uma das quatro opções disponíveis')
// }


// EXERCÍCIO DE FXAÇÃO I:
// const num = Number(prompt('Digite um número:'))
// if(num%2===0){
//     if(num%3===0) {
//         console.log('O número É divisível por 2 e por 3');
//     } else {
//         console.log('O número NÃO é divisível por 3 e por 2')
//     }
// } else {
//     console.log('O número NÃO é divisível por 3 e por 2')
// }


// IF ELSE
//  if(num%2===0 && num%3===0){
//      console.log('O número É divisível por 3 e por 2');
//      num===30 ? console.log('Ufa Acertei') : console.log('Não foi dessa vez')
//  } else {
//     console.log('O número NÃO é divisível por 3 e por 2')
// }

// IF TERNÁRIO:
// num%2===0 && num%3===0 ? console.log('O número É divisível por 3 e por 2') : console.log('O número NÃO é divisível por 3 e por 2');

// EXERCÍCIO DE FXAÇÃO II:
// TERNÁRIO DENTRO DO IF:
// if(num%2===0 && num%3===0){
//     console.log('O número É divisível por 3 e por 2');
//     num===30 ? console.log('Ufa Acertei') : console.log('Não foi dessa vez')
// } else {
//    console.log('O número NÃO é divisível por 3 e por 2')
// }


// EXERCÍCIO DE FXAÇÃO II:
// stwitch case
const num = Number(prompt('Digite um número:'))
if(num%2===0 && num%3===0){
    console.log('O número É divisível por 3 e por 2');
    let msg = `Você digitou o número ${num}`
switch(num){
    case 6:
        console.log(msg);
        break;
    case 12:
        console.log(msg);
        break;
    case 18:
        console.log(msg);
        break;
    case 24:
        console.log(msg);
        break;
    case 30:
        console.log(msg);
        break;
    default:
        console.log('O número é maior que 30 e menor que 6');
}
} else {
   console.log('O número NÃO é divisível por 3 e por 2')
}