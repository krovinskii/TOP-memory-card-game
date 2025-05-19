//Use pokeAPI and return an array of image URLs to be passed to CardGrid.jsx

const useFetchImgs = (numOfImgs) => {
  const randomIds = (numOfImgs) => {
    const arr = [];
    for (let i = 0; i < numOfImgs; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  };
  const checkForDupes = (numOfImgs) => {
    let randomIdArr;
    let arrSet;

    do {
      randomIdArr = randomIds(numOfImgs);
      arrSet = new Set(randomIdArr);
    } while (arrSet.size !== randomIdArr.length);
    return randomIdArr;
  };
  const pokeApiUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

  const imgUrlArr = (ids) => {
    return ids.map((id) => `${pokeApiUrl}${id}.png`);
  };
  const ids = checkForDupes(numOfImgs);
  console.log(imgUrlArr(ids));
  return imgUrlArr(ids);
};
export default useFetchImgs;
