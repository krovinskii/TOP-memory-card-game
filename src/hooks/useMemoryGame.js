import { useState, useEffect } from "react";

const useMemoryGame = () => {
  const [clickedCards, setClickedCards] = useState([]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  const reset = () => {
    setScore(0);
    setClickedCards([]);
  };

  const handleCardClick = (img) => {
    if (clickedCards.includes(img)) {
      return reset();
    } else {
      setScore((prev) => prev + 1);
      setClickedCards([...clickedCards, img]);
    }
  };
  return { handleCardClick, score, clickedCards, highScore };
};
export default useMemoryGame;
