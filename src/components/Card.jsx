import { useState } from "react";

function Card({ img, onClick }) {
  //Set State for if the card has been clicked, renders as false.
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick(img);
    setClicked(true);
  };

  return (
    <div
      className="container p-[2rem] min-h-[20rem] w-[100%] shadow-xl"
      onClick={handleClick}
    >
      <img
        src={img}
        alt="Pokemon Card"
        className="w-full h-full  object-center"
      />
    </div>
  );
}
export default Card;
