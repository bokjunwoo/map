import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../atoms/userLevelState';
import { calculateIndividualExperienceMultiplier } from '../../utils/calculate';
import MapEventSkillUI from './UI/MapEventSkillUI';

const MapEventSkill = ({ item }: { item: MapInfo }) => {
  const userLevel = useRecoilValue(userLevelState);

  const [selectedRuneValue, setSelectedRuneValue] = useState(0);

  const highestLevelMonster = item.monsters.reduce((prev, curr) => {
    return prev.level > curr.level ? prev : curr;
  });

  const expMultiplier = calculateIndividualExperienceMultiplier(
    userLevel,
    highestLevelMonster
  );

  return (
    <MapEventSkillUI
      item={item}
      highestLevelMonster={highestLevelMonster}
      runeValue={selectedRuneValue}
      expMultiplier={expMultiplier}
      setSelectedRuneValue={setSelectedRuneValue}
    />
  );
};

export default MapEventSkill;
