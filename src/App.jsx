import useFetchLinks from "./hooks/useFetchLinks";
import CardGrid from "./components/CardGrid";
import prepareCards from "./utils/prepareCards";
function App() {
  const { links, loading, error } = useFetchLinks(6);
  const actionOnCards = prepareCards;
  const duplicatedCards = actionOnCards.duplicate(links);
  const shuffledCards = actionOnCards.shuffle;

  return (
    <div>
      <CardGrid
        imgsLinkArr={shuffledCards(duplicatedCards)}
        loading={loading}
        error={error}
      />
    </div>
  );
}
export default App;
