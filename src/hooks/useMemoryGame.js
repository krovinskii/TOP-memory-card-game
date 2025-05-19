import { useState } from "react";

const useMemoryGame = () => {
  const [clickedCards, setClickedCards] = useState([]);

  const [score, setScore] = useState(0);

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
  return { handleCardClick, score, clickedCards };
};
export default useMemoryGame;
