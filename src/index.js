import './style.css';
import { showData } from '../modules/scoresArr.js';
import printScores from '../modules/displayScores.js';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('#submit-btn');
const player = document.getElementById('name');
const score = document.getElementById('score');

window.addEventListener('DOMContentLoaded', () => {
  printScores();

  refreshBtn.addEventListener('click', () => {
    printScores();
  });

  submitBtn.addEventListener('click', () => {
    if (player.value.length === 0) {
      return;
    }

    showData(player.value, score.value);
    player.value = '';
    score.value = '';
  });
});
