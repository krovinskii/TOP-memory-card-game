const prepareCards = {
  duplicate(images) {
    return [...images, ...images];
  },
  shuffle(arr) {
    const result = [...arr];
    let currentIndex = result.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [result[currentIndex], result[randomIndex]] = [
        result[randomIndex],
        result[currentIndex],
      ];
    }

    return result;
  },
};
export default prepareCards;
