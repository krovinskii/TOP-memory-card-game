const Score = ({ score, highScore }) => {
  return (
    <div className="container p-[1rem] shadow-md text-center">
      Score: {score} <br />
      High Score: {highScore}
    </div>
  );
};
export default Score;
