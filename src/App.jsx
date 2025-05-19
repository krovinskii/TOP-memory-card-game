import CardGrid from "./components/CardGrid";
import Score from "./components/Score.jsx";
import useFetchImgs from "./hooks/useFetchImgs.js";
import useMemoryGame from "./hooks/useMemoryGame.js";

import { useState, useEffect } from "react";

function App() {
  const [imgs, setImgs] = useState([]);
  const { score, handleCardClick } = useMemoryGame();

  useEffect(() => {
    const fetchedImgs = useFetchImgs(12);
    setImgs(fetchedImgs);
  }, []);

  return (
    <div className="flex items-center flex-col min-w-[100vw]">
      <div className="container shadow-md p-[1rem]">
        <h1 className="text-3xl font-bold text-center">Memory Game</h1>
        <p className="text-center">
          <span className="font-bold">How to Play:</span> Click a card to reveal
          it. Don’t click the same card twice — if you do, your score resets!
          Try to click all the unique cards to win.
        </p>
      </div>
      <Score score={score} />
      <CardGrid imgArray={imgs} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
