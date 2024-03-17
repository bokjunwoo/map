export const calculateSumOfMonsters = (numberOfMonsters: number[]) => {
  return numberOfMonsters.reduce((total, current) => total + current, 0);
};
