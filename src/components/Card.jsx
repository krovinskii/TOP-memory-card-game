//Takes in one prop "img" and renders an image with padding
function Card({ img }) {
  return (
    <div className="p-[.5rem] shadow-xl rounded-lg bg-white w-[15rem] h-[20vh]  box-border">
      <img src={img} alt="Card Img" className="h-full w-full object-cover" />
    </div>
  );
}
export default Card;
