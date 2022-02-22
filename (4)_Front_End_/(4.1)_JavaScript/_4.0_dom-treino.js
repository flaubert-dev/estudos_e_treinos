console.log(window);
// window é o objeto global do browser (navegador)
// window possui diferentes métodos e propriedades

window.innerHeight;
// esse exemplo retorna a altura (height) do browser (navegador)
// .innerHeight acessando uma propriedade do objeto window
// propriedades não executam, só retornam um valor

window.alert('Isso irá fazer com que apareça um alerta')
alert('Isso irá fazer com que apareça um alerta sem o objeto window')
// O window não é obrigatório ser colocado antes do alert() por ser global, 
// o alert() ou qualquer outro método do objeto window vai funcionar normalmente.

document.querySelector('h1');
// O objeto document acessa o método querySelector que recebe um argumento 'h1',
// isso faz com que a primeira tag / elemento h1 dentro do documento (html) seja selecionado.

const h1Selector = document.querySelector('h1');
// o h1Selector vira o objeto Element herdando suas Propriedades e Métodos: 
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element

h1Selector.addEventListener('click', function(){
  console.log('Clicou em ', h1Selector);
})
// O h1Selector agora é um Element e acessa (.) o Método addEventListener
// O Método addEventListener pode passar dois parâmetros
// O primeiro parâmetro é o 'click'
// O segundo parâmetro é a função

// Outra forma de se criar o código acima:
function callBack()
{
  console.log('Clicou em ', h1Selector);
}

h1Selector.addEventListener('click', callBack);
