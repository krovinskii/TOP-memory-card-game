import CardGrid from "./components/CardGrid";
import useFetchImgs from "./hooks/useFetchImgs.js";

function App() {
  const imgs = useFetchImgs(12);

  return <CardGrid imgArray={imgs} />;
}

export default App;
