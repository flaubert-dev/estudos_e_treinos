# Metodologia CSS - BEM
BEM é uma forma ou metodologia que utilizo para criar as minhas classes CSS, exemplo:

> ``<ul class="bloco">Bloco PAI<ul>``       - **_Tipo 1 (bloco PAI)_**<br>
> ``<ul class="bloco-pai">Bloco PAI<ul>``   - **_Tipo 2 (bloco PAI)_**

<br>

> ``<li class="bloco__filho">Bloco FILHO<li>``        - **_Tipo 1 (bloco FILHO)_**<br>
> ``<li class="bloco-pai__filho">Bloco FILHO<li>``    - **_Tipo 2 (bloco FILHO)_**

<br>

> ``<a class="bloco__filho-neto">Bloco NETO<a>``      - **_Tipo 1 (bloco NETO)_**<br>
> ``<a class="bloco-pai__filho-neto">Bloco NETO<a>``  - **_Tipo 2 (bloco NETO)_**

<br>

> ``<a class="bloco__filho-neto--hover">Bloco NETO<a>``      - **_--hover é o modificador (opcional)_**<br>
> ``<a class="bloco-pai__filho-neto--hover">Bloco NETO<a>``  - **_--hover é o modificador (opcional)_**

<br>

Na prática ficaria assim no **tipo 1**:

  {
    <ul class="bloco"> /* Bloco PAI */
      <li class="bloco__filho"> /* Bloco FILHO */
        <a class="bloco__filho-neto"></a> /* Bloco NETO */
        <a class="bloco__filho-neto--nomedomodificador"></a> /* Bloco NETO com modificador */
      </li> 
    <ul>
  }

Na prática ficaria assim no **tipo 2**:

  {
    <ul class="bloco-pai"> /* Bloco PAI */
      <li class="bloco-pai__filho"> /* Bloco FILHO */
        <a class="bloco-pai__filho-neto"></a> /* Bloco NETO */
        <a class="bloco-pai__filho-neto--nomedomodificador"></a> /* Bloco NETO com modificador */
      </li> 
    <ul>
  }

## Fontes de estudo
- [BEM Guia Definitivo](https://desenvolvimentoparaweb.com/css/bem/)
