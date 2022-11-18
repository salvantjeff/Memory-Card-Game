import './App.css';
import Game from "./Game";
import generateBuildOrder from "./generateBuildOrder";

const gameInit = new Game(0, 0);
const cardDescriptions = ['first', 'second', 'third', 'fourth'];
const initBuildOrder = generateBuildOrder(cardDescriptions.length);

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
