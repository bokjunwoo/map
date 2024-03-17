export const calculateSumOfMonsters = (numberOfMonsters: number[]) => {
  return numberOfMonsters.reduce((total, current) => total + current, 0);
};

export const calculateTotalMonstersWithTime = (
  numberOfMonsters: number[],
  time: number
): number => {
  return numberOfMonsters.reduce(
    (total, current) => total + current * time * 8,
    0
  );
};
