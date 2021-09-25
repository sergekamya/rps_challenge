import React, { useState } from "react";

const App = () => {
  const [userscore, setUserscore] = useState([]);
  const [computerscore, setComputerscore] = useState([]);

  function randomscore(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
  }
  randomscore(1, 3);





  return (
    <div>
      <h1 data-cy="header">Rock, paper, scissor game</h1>
      <button data-cy="button1">Rock</button>
      <button data-cy="button2">Paper</button>
      <button data-cy="button3">Scissor</button>
      <p> {computerscore}</p>
    </div>
  );
};

export default App;
