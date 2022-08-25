import scoresArr from './scoresArr.js';

const displayScores = document.querySelector('.scores');
const printScores = () => {
  scoresArr.forEach((game, index) => {
    let listItem = '';
    listItem = `<li class="score-item" id="${index}">${game.name}: ${game.score}</li>`;
    displayScores.innerHTML += listItem;
  });

  return displayScores;
};

export default printScores;