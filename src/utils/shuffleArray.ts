export const shuffleArray = (array: any[]): any[] => {
  const arrayLength = array.length;
  array.map((el, i) => {
    const index = Math.floor(Math.random() * Math.floor(arrayLength));
    [array[i], array[index]] = [array[index], array[i]];
  });
  return array;
};
