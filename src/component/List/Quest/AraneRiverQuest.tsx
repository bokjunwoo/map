import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import {
  araneRiverDailyQuestExp,
  araneRiverDailyQuestRegions,
} from '../../../data/quest';
import {
  araneRiverDailyQuestMinRegionsLevel,
  minRegionsLevel,
} from '../../../data/region';
import useSelectedRegions from '../../../hooks/useSelectedRegions';
import QuestListUI from './UI/QuestListUI';

const AraneRiverQuest = () => {
  const characterLevel = useRecoilValue(userLevelState);

  const obtainableRegions = araneRiverDailyQuestRegions.filter(
    (region) => characterLevel >= (minRegionsLevel[region] || 0)
  );

  const { selectedRegions, handleCheckboxChange } =
    useSelectedRegions(obtainableRegions);

  return (
    <QuestListUI
      title="아케인리버 일일퀘스트"
      characterLevel={characterLevel}
      dailyQuestRegions={araneRiverDailyQuestRegions}
      selectedRegions={selectedRegions}
      handleCheckboxChange={handleCheckboxChange}
      questExp={araneRiverDailyQuestExp}
      minLevelData={araneRiverDailyQuestMinRegionsLevel}
    />
  );
};

export default AraneRiverQuest;
