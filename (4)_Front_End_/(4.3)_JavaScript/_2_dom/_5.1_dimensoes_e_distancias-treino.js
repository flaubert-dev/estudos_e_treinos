// LEMBRANDO: todo o conceito abaixo vale também para o Width: clientWidth ...

const lista = document.querySelector('.lista');
// Seleciona o PRIMEIRO elemento com a classe CSS: lista dentro do documento html

const listaHeight = lista.clientHeight;
// Retorna um número informando o tamanho (height) da lista
// Lembrando que essa propriedade (clientHeight) identifica 
// se o elemento tem um padding que aumente o tamanho (height), mas não um border (por exemplo),
// para identificar: height + paddding + border, teria que utilizar a propriedade:
// offsetHeight 

console.log(listaHeight);
// Mostra no console do navegador o tamanho (height) da lista

// \/\/ No exemplo abaixo se a lista tiver um overflow-y: scroll (Propriedade CSS)
// \/\/ Será retornado o tamanho (height) do scroll

const listaComScroll = document.querySelector('.lista-scroll');
// Seleciona o PRIMEIRO elemento com a classe CSS: lista-scroll dentro do documento html

const listaComScrollHeight = listaComScroll.scrollHeight;
// Retorna um número informando o tamanho total (height) do scroll da lista

console.log(listaComScrollHeight);
// Mostra no console do navegador o tamanho total (height) do scroll da lista
