function soma(a, b){
  return a + b
}

const max = 60;
const min = 1;
const aleatorio = parseInt(Math.random() * (max - min) + min);

//console.log(aleatorio);

function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
  return array.includes(aleatorio) ?
    gerarNumeroNaoContido(min, max, array) :
    aleatorio;
}

function gerarNumeros(qtd) {
  const numeros = Array(qtd)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = gerarNumeroNaoContido(1, 60, nums);
      //console.log([...nums, novoNumero]);
      return [...nums, novoNumero];
    }, [])
    .sort((n1, n2) => n1 - n2);
  
  return numeros;
}

//console.log(gerarNumeroNaoContido(1, 60, [0, 0, 0, 0, 0, 0]));
//console.log(gerarNumeros(7));

function inserirNumeros(qtd, min, max) {
  const arr = [];
  while (arr.length != qtd) {
    let numero = parseInt(Math.random() * 100);
    if (numero >= min && numero <= max) {
      if (!arr.includes(numero)) {
        arr.push(numero);
      }
    }
  }
  return arr.sort((a, b) => a - b);
}

console.log(inserirNumeros(61, 1, 60));