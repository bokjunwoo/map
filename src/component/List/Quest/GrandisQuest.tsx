import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import {
  grandisDailyQuestExp,
  grandisDailyQuestRegions,
} from '../../../data/quest';
import {
  grandisDailyQuestMinRegionsLevel,
  minRegionsLevel,
} from '../../../data/region';
import useSelectedRegions from '../../../hooks/useSelectedRegions';
import QuestListUI from './UI/QuestListUI';

const GrandisQuest = () => {
  const characterLevel = useRecoilValue(userLevelState);

  const obtainableRegions = grandisDailyQuestRegions.filter(
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
      questExp={grandisDailyQuestExp}
      minLevelData={grandisDailyQuestMinRegionsLevel}
    />
  );
};

export default GrandisQuest;
