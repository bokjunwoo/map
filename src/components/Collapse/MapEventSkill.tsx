import { useState } from 'react';
import { useLevelState } from '../../contexts/LevelStateProvider';
import { MapInfo } from '../../interface/map';
import { calculateIndividualExperienceMultiplier } from '../../utils/calculate';
import MapEventSkillUI from './UI/MapEventSkillUI';

const MapEventSkill = ({ item }: { item: MapInfo }) => {
  const { level: playerLevel } = useLevelState();

  const [selectedRuneValue, setSelectedRuneValue] = useState(0);

  const highestLevelMonster = item.monsters.reduce((prev, curr) => {
    return prev.level > curr.level ? prev : curr;
  });

  const expMultiplier = calculateIndividualExperienceMultiplier(
    playerLevel,
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
