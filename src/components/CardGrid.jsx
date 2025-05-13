//Takes in an array of image links and renders a grid of cards
import Card from "./Card";

function CardGrid({ imgsLinkArr, loading, error }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log("grid made");
  return (
    <div className="grid grid-cols-3 gap-4 p-4 mx-auto justify-items-center">
      {imgsLinkArr.map((imgLink) => (
        <Card img={imgLink} key={imgLink} />
      ))}
    </div>
  );
}
export default CardGrid;
