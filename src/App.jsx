import useFetchLinks from "./hooks/useFetchLinks";
import CardGrid from "./components/CardGrid";
import prepareCards from "./utils/prepareCards";
import useGameLogic from "./hooks/useGameLogic";
import { useEffect, useState } from "react";

function App() {
  const { links, loading, error } = useFetchLinks(6);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (Array.isArray(links) && links.length > 0 && cards.length === 0) {
      const actionOnCards = prepareCards;
      const duplicatedCards = actionOnCards.duplicate(links);
      const shuffledCards = actionOnCards.shuffle(duplicatedCards);
      setCards(shuffledCards);
    }
  }, [links]);

  return (
    <div>
      <CardGrid imgsLinkArr={cards} loading={loading} error={error} />
    </div>
  );
}
export default App;
