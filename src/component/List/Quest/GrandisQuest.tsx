import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import {
  dailyQuestRegions,
  grandisDailyQuestRegions,
} from '../../../data/quest';
import { minRegionsLevel } from '../../../data/region';
import useSelectedRegions from '../../../hooks/useSelectedRegions';
import QuestListUI from './UI/QuestListUI';

const GrandisQuest = () => {
  const characterLevel = useRecoilValue(userLevelState);

  const obtainableRegions = dailyQuestRegions.filter(
    (region) => characterLevel >= (minRegionsLevel[region] || 0)
  );

  const { selectedRegions, handleCheckboxChange } =
    useSelectedRegions(obtainableRegions);

  return (
    <QuestListUI
      title="그란디스 일일퀘스트"
      characterLevel={characterLevel}
      dailyQuestRegions={grandisDailyQuestRegions}
      selectedRegions={selectedRegions}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export default GrandisQuest;
