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

// \/\/ No exemplo abaixo podemos identificar a distância pelas propriedades de leitura:
// \/\/ offsetTop e offsetLeft

const section = document.querySelector('.my-section');
// Seleciona o PRIMEIRO elemento com a classe CSS: my-section dentro do documento html

const sectionTop = section.offsetTop;
// Retorna um número informando a distância entre o topo do elemento e o topo da página

console.log(sectionTop);
// Mostra no console do navegador a distância entre o topo do elemento e o topo da página

const sectionLeft = section.offsetLeft;
// Retorna um número informando a distância entre o canto esquerdo 
// do elemento e o canto esquerdo da página

// \/\/ No exemplo abaixo será utilizado o método getBoundingClientRect()

const section2 = document.querySelector('.my-section-2');
// Seleciona o PRIMEIRO elemento com a classe CSS: my-section-2 dentro do documento html

const rect = section2.getBoundingClientRect();
// section2 acessa (.) o método getBoundingClientRect()

const rectHeight = rect.height;
// Retorna o height do elemento

const rectWidth = rect.width;
// Retorna o width do elemento

const rectTop = rect.top;
// Retorna a distância entre o topo do elemento e o scroll

console.log(rectHeight);
// Mostra no console do navegador o height do elemento

console.log(rectWidth);
// Mostra no console do navegador o width do elemento

console.log(rectTop);
// Mostra no console do navegador a distância entre o topo do elemento e o scroll

// \/\/ No exemplo abaixo as dimensões e distâncias no Objeto Global: Window (Janela / DOM)

window.innerWidth; // width da janela
window.innerWidth; // width da janela
window.innerWidth; // width da janela
window.innerWidth; // width da janela

window.innerWidth; // width da janela
window.innerWidth; // width da janela

if(window.innerWidth < 600) {
  console.log('Esta mensagem aparecerá no console se a tela for menor que 600px');
}
