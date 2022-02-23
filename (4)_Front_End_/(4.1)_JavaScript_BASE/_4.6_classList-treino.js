const menu = document.querySelector('.menu');
// Seleciona o PRIMEIRO elemento que contém a classe CSS: menu

menu.className; // Retorna uma string
menu.classList; // Se tiver o forEach() o classList retorna a lista de classes
menu.classList.add('ativo'); // Adiciona uma nova classe para o elemento
menu.classList.add('ativo', 'mobile'); // Adiciona duas classes para o elemento
menu.classList.remove('ativo'); // Remove a existente no elemento
menu.classList.toggle('ativo'); // Adiciona e remove a classe no elemento

menu.classList.contains('ativo'); 
// Confere se o elemento possui a classe CSS: ativo (true ou false)

menu.classList.replace('ativo', 'inativo');
// Substitui a classe CSS: ativo (classe que existe no elemento) para a classe: inativo
