function exibirOla(){
    console.log ('Olá mundo!')
}
exibirOla();

function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }  
  exibirOlaNome("Maitê");
 
function calcularDobro(numero) {
    return numero * 2;
  }
  
let resultadoDobro = calcularDobro(98641);
  console.log(resultadoDobro);
  
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
let media = calcularMedia(45,4, 8);
  console.log(media);

function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
let maiorNumero = encontrarMaior(4985, 4984);
  console.log(maiorNumero);

  function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(9000);
  console.log(resultado); 
