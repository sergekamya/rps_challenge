import React, { useState } from "react";

const App = () => {
  const [userchoice, setUserchoice] = useState([]);
  const [computerscore, setComputerscore] = useState([]);

  function randomscore(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + 1)
  }

  randomscore(3, 1);

 


  
    
    let computer = randomscore
    
    if (user === 1 && computer === 2) {
      console.log("You lose");
    }

    else if (user === 1 && computer === 3) {
      console.log("You win");
    }

    else if (user === 2 && computer === 1) {
      console.log("You win");

    }

    else if (user === 2 && computer === 3) {
      console.log("You lose");
    }

      else if (user === 3 && computer === 2) {
        console.log("You win");
      }
    
      else if (user === 3 && computer === 1) {
        console.log("You lose");

      }

      else
      console.log("draw")

      
      






  return (
    <div>
      <h1 data-cy="header">Rock, paper, scissor game</h1>
      <button data-cy="button1">Rock</button>
      <button data-cy="button2">Paper</button>
      <button data-cy="button3">Scissor</button>
    </div>
  );
};

export default App;
