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
// Lembrando que o getElementsByClassName é um HTML Collection.
// Por ser HTML Collection não possui o método forEach()
const titulosArray = Array.from(titulos);
// Transforma titulos em um array (verdadeiro): titulosArray
// Depois de transformado, pode utilizar o método forEach()

titulosArray.forEach(function(item){
  console.log(item);
});
// 1: pega os elementos que tem a classe CSS: titulo já transformados em array.
// 2: acessa (.) o método forEach()
// 3: o método forEach() possui o parâmetro function(), o famoso callback.
// 4: dentro do parâmetro function() tem o parâmetro: item
// 5: cada item (ou elemento) selecionado será mostrado no console do navegador.

// \/\/\/ Logo abaixo o **Arrow Function** sendo utilizado (com parâmetro):

const imgs = document.querySelectorAll('img');
// Seleciona todas as tags html: img

imgs.forEach((item) => {
  console.log(item);
});
// 1: pega todas as tags html: img e acessa (.) o método forEach()
// 2: a Arrow Function (=>) é criada com o parâmetro: item
// Note que a palavra-chave: function (foi excluida), logo depois vem o parâmetro,
// em seguida vem o fat arrow (=>). Essa é a forma moderna de escrever uma função em JS, chamada:
// **Arrow Function**.
// 3: cada tag html: img selecionada será exibido no console do navegador.

// \/\/\/ Logo abaixo o **Arrow Function** sendo utilizado (sem parâmetro):

const imgs = document.querySelectorAll('img');
// Seleciona todas as tags html: img

let i = 0
// O valor de i para iniciar o loop

imgs.forEach(() => {
  console.log(i++);
});
// 1: pega todas as tags html: img e acessa (.) o método forEach()
// 2: a Arrow Function (=>) é criada sem nenhum parâmetro.
// Note que a palavra-chave: function (foi excluida), logo depois vem os parênteses,
// em seguida vem o fat arrow (=>). Essa é a forma moderna de escrever uma função em JS, chamada:
// **Arrow Function**.

// \/\/\/ Exemplos: **Arrow Function** sendo utilizado em uma linha de várias formas:

imgs.forEach(() => console.log(i++)); // Em uma linha sem parâmetro
imgs.forEach((item) => console.log(item)); // Em uma linha com parâmetro
imgs.forEach(item => console.log(item)); // Em uma linha com parâmetro (sem parênteses)

imgs.forEach(() => i++); 
// Em uma linha sem parâmetro, não é necessário da palavra-chave: return
// Já é retornado direto, mesmo sem a palavra-chave: return
