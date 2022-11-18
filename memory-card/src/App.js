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
