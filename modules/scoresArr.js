const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/A0HhCYjfm5a3zPPkLnsD/scores/';

const fetchData = async () => {
  const response = await fetch(URL);
  const scores = await response.json();
  return scores;
};

const showData = async (player, scores) => {
  const answer = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: player, score: scores }),
  });
  const score = answer.json();
  return score;
};

export { fetchData, showData };