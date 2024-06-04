export const findHighestLevelMonster = (
  monsters: MapMonsterInfo[]
): MapMonsterInfo => {
  return monsters.reduce((prev, curr) =>
    prev.level > curr.level ? prev : curr
  );
};
