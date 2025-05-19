import Card from "./Card.jsx";
import { useState, useEffect } from "react";

function CardGrid({ imgArray }) {
  const [shuffledArray, setShuffledArrary] = useState(imgArray);

  const shuffleCards = () => {
    const newArr = [...shuffledArray].sort(() => Math.random() - 0.5);
    setShuffledArrary(newArr);
  };
  useEffect(() => {
    setShuffledArrary([...imgArray].sort(() => Math.random() - 0.5));
  }, [imgArray]);
  return (
    <div className="container grid grid-cols-6 grid-rows-2 gap-4">
      {shuffledArray.map((imgUrl, id) => (
        <Card key={id} img={imgUrl} onClick={shuffleCards} />
      ))}
    </div>
  );
}

export default CardGrid;
