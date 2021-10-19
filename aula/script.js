// criar a função
function primeiraMensagem() {
  console.log('Olá eu sou uma função');
}

//chamar a função
primeiraMensagem();

//argumento - valor que sera enviado para o paramentro
segundaMensagem('1SIF');

//parametros para a função
function segundaMensagem(turma) {
  console.log(`Olá ${turma}, eu sou uma função`);
}

//função com retorno
function multiplicaValores(valor1, valor2){
  const resultado = (valor1 * valor2);
  return resultado;
}

//chamando a função e exibindo o retorno
let retornoFuncao = multiplicaValores(5,5);
console.log(retornoFuncao);

retornoFuncao = multiplicaValores(15,5);
console.log(retornoFuncao);

retornoFuncao = multiplicaValores(25,15);
console.log(retornoFuncao);

//funções anonimas
const media = function (nota1, nota2) {
  return (nota1 + nota2)/2;
}

console.log(`A média obtida foi: ${media(8,7)}`);

//arrow functions
const mediaFiap = (notaPrimeiroSemestre, notaSegundoSemestre) =>{
  return (notaPrimeiroSemestre*0.4 + notaSegundoSemestre*0.6);
}
console.log(`Média Final de Web: ${mediaFiap(84,44)}`);