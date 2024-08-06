import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import { epicDungeonRegions } from '../../../data/quest';
import { epicDungeonMinRegionsLevel } from '../../../data/region';
import useSelectedRegions from '../../../hooks/useSelectedRegions';
import EpicDungeonListUI from './UI/EpicDungeonListUI';

const EpicDungeon = () => {
  const characterLevel = useRecoilValue(userLevelState);

  const obtainableRegions = epicDungeonRegions.filter(
    (region) => characterLevel >= (epicDungeonMinRegionsLevel[region] || 0)
  );

  const { selectedRegions, handleCheckboxChange } =
    useSelectedRegions(obtainableRegions);

  return (
    <EpicDungeonListUI
      title="에픽 던전"
      characterLevel={characterLevel}
      epicDungeonRegions={epicDungeonRegions}
      selectedRegions={selectedRegions}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export default EpicDungeon;
