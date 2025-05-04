//Takes in an array of image links and renders a grid of cards
import Card from "./Card";

function CardGrid({ imgsLinkArr }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {imgsLinkArr.map((imgLink) => (
        <Card img={imgLink} key={imgLink} />
      ))}
    </div>
  );
}
export default CardGrid;
