import React, {useState, useEffect} from 'react';
import './App.css';
import Card from "./Card";
import Game from "./Game";
import generateBuildOrder from "./generateBuildOrder";
import Header from "./components/Header";
import CardsBox from "./components/CardsBox";
import Modal from "./components/Modal/Modal";

const gameInit = new Game(0, 0);
const cardDescriptions = ['first', 'second', 'third', 'fourth'];
const initBuildOrder = generateBuildOrder(cardDescriptions.length);

(function initCards (
  currentGame, 
  someCard, 
  descriptions, 
  currentBuildOrder
  ) {
  for (let i = 0; i < descriptions.length; i++) {
    currentGame.addNewCard(
      new someCard(currentBuildOrder[i], descriptions[i])
    )
  }
})(gameInit, Card, cardDescriptions, initBuildOrder);

function App() {
  const [stopGame, setStopGame] = useState(false);
  const [game, setGame] = useState(gameInit);
  const [buildOrder, setBuildOrder] = useState(initBuildOrder);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  function getCurrentScore(newGame) {
    let total = 0;
    for (let card of buildOrder) {
      const current = newGame.newCards[card].totalClicks;
      if (current < 2) {
        total += 1;
      }
    }
    return total;
  }

  function updateCurrentScore(newGame) {
    const nextGame = {
      ...newGame,
      currentScore: getCurrentScore(newGame),
    };
   
    setGame(nextGame); 
    console.log('post current score --->', nextGame.newCards);
  }

  function updateTotalClicks(cardId) {
    const nextGame = {
      ...game,
      newCards: {
        ...game.newCards,
        [cardId]: {
          ...game.newCards[cardId],
          totalClicks: game.newCards[cardId].totalClicks - 1,
        }
      }
    }
    setGame(nextGame);
    console.log('post total clicks --->',nextGame.newCards);
    updateCurrentScore(nextGame);
  }

  useEffect(() => {
    function isGameOver() {
      let status = false;
      for (let card of buildOrder) {
        const current = game.newCards[card].totalClicks;
        if (current === 0) {
          status = true;
        }
      }
  
      if(status) {
        setStopGame(true);
      }
    }
    isGameOver();
  }, [game, buildOrder]);

  useEffect(() => {
    console.log(stopGame);
    if (stopGame) {
      toggleModal();
      resetGame();
    }
  }, [stopGame]);
  
  function resetCards() {
    const nextNewCards = {
      ...game.newCards
    }

    for (let key in nextNewCards) {
      const currentCard = nextNewCards[key];
      currentCard.totalClicks = 2;
    }
                   
    setGame({
      ...game,
      newCards: nextNewCards
    });
  }

  function resetGame() {
    const nextGame = {
      ...game,
      currentScore: 0,
      highestScore: Math.max(game.highestScore, game.currentScore)
    }
    setGame(nextGame);
    setBuildOrder(initBuildOrder);
  }

  function playAgain() {
    resetGame(); 
    toggleModal(); 
    setStopGame(false); 
    resetCards();
  };

  function runShuffleCards() {
    const nextBuildOrder = [...buildOrder];
    console.log(nextBuildOrder);
    shuffleCards(nextBuildOrder);
    setBuildOrder(nextBuildOrder);
  }
  
  function handleClick(cardId) {
    if (typeof cardId !== 'string') return;
    updateTotalClicks(cardId);
    runShuffleCards();
  }

  return (
    <div className="container">
      <Header 
        currentScore={game.currentScore}
        highestScore={game.highestScore}
      />
      <CardsBox 
        newCards={game.newCards} 
      />
      <Modal 
        modal={modal} 
        toggleModal={toggleModal} 
        playAgain={playAgain}
        setStopGame={setStopGame}
      />
    </div>
  );
}

export default App;
