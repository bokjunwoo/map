import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import { araneRiverWeeklyQuestRegions } from '../../../data/quest';
import { weeklyQuestMinRegionsLevel } from '../../../data/region';
import useSelectedRegions from '../../../hooks/useSelectedRegions';
import WeeklyQuestListUI from './UI/WeeklyQuestListUI';

const AraneRiverWeeklyQuest = () => {
  const characterLevel = useRecoilValue(userLevelState);

  const obtainableRegions = araneRiverWeeklyQuestRegions.filter(
    (region) => characterLevel >= (weeklyQuestMinRegionsLevel[region] || 0)
  );

  const { selectedRegions, handleCheckboxChange } =
    useSelectedRegions(obtainableRegions);

  return (
    <WeeklyQuestListUI
      title="아케인리버 주간퀘스트"
      characterLevel={characterLevel}
      weeklyQuestsRegions={araneRiverWeeklyQuestRegions}
      selectedRegions={selectedRegions}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export default AraneRiverWeeklyQuest;
