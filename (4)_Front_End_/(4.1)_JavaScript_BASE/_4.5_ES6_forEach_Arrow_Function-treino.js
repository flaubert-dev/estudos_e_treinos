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