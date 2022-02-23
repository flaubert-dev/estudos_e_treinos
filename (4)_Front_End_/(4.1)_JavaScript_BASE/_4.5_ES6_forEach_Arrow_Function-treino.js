const imgs = document.querySelectorAll('img');
// Seleciona todas as tags html: img

imgs.forEach(function(item, index, array){
  console.log(item); // O item atual no loop
  console.log(index); // O número do index
  console.log(array); // A array completa
});
// 1: pega todas a todas as tags html: img e acessa (.) o método forEach()
// 2: o método forEach() possui o parâmetro function(), o famoso callback.
// 3: dentro do parâmetro function() temos os parâmetros: 
// 4: item(valorAtual), index(numeroIndex), array(arrayCompleta)

// Transformando um **array-like** em **array**: \/ (código abaixo) \/

const titulos = document.getElementsByClassName('titulo');
// Seleciona todos os elementos que tem a classe CSS: titulo
const titulosArray = Array.from(titulos);
// Transforma titulos em um array (verdadeiro)

titulosArray.forEach(function(item){
  console.log(item);
});
// 1: pega os elementos que tem a classe CSS: titulo já transformados em array.
// 2: acessa (.) o método forEach()
// 3: o método forEach() possui o parâmetro function(), o famoso callback.
// 4: dentro do parâmetro function() tem o parâmetro: item
// 5: cada item (ou elemento) selecionado será mostrado no console do navegador.
