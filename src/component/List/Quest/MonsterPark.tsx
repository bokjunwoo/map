import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import {
  extremeDungeonRegion,
  highEndDungeonRegions,
} from '../../../data/quest';
import {
  extremeDungeonMinRegionLevel,
  highEndDungeonMinRegionsLevel,
} from '../../../data/region';
import useSelectedRegions from '../../../hooks/useSelectedRegions';
import MonsterParkListUI from './UI/MonsterParkListUI';

const MonsterPark = () => {
  const characterLevel = useRecoilValue(userLevelState);

  const accessibleHighEndDungeonRegions = highEndDungeonRegions.filter(
    (region) => characterLevel >= highEndDungeonMinRegionsLevel[region]
  );

  const highestLevelRegion =
    accessibleHighEndDungeonRegions[accessibleHighEndDungeonRegions.length - 1];

  const obtainableExtremeDungeonRegion =
    characterLevel >= extremeDungeonMinRegionLevel[extremeDungeonRegion]
      ? extremeDungeonRegion
      : null;

  const selectedMonsterParkRegions: MonsterParkRegion[] =
    obtainableExtremeDungeonRegion !== null
      ? [highestLevelRegion, obtainableExtremeDungeonRegion]
      : [highestLevelRegion];

  const { selectedRegions, handleCheckboxChange } = useSelectedRegions(
    selectedMonsterParkRegions
  );

  return (
    <MonsterParkListUI
      title="몬스터파크"
      characterLevel={characterLevel}
      selectedMonsterParkRegions={selectedMonsterParkRegions}
      selectedRegions={selectedRegions}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export default MonsterPark;
