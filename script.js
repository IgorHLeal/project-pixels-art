
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const cores = document.querySelectorAll('.color');
const selectedPixel = document.querySelectorAll('.pixel');
const clearPixels = document.querySelectorAll('#clear-board');


// Requisito 7 em andamento
// Concluído com ajuda do Pedro Fideles da Turma 19 - tribo a via zoom e Laís Nametala e Sheila Arello via Slack (Ambas da Turma 19 - tribo A)
for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selecionaCor);
}

function selecionaCor(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}

// Requisito 8
// Referências: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
for (let index = 0; index < selectedPixel.length; index += 1) {
  selectedPixel[index].addEventListener('click', colorirPixels);
}

function colorirPixels(event) {
  const selectedColor = document.querySelector('.selected');
  const colorir = event.target;
  colorir.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
  console.log('oi');
}

// Requisito 9
/* function clearBoard() {
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
}
clearPixels.addEventListener('click', clearBoard); */
