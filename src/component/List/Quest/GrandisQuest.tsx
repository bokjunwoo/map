import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import { grandisDailyQuestRegions } from '../../../data/quest';
import { minRegionsLevel } from '../../../data/region';
import GrandisQuestUI from './UI/GrandisQuestUI';

const GrandisQuest = () => {
  const characterLevel = useRecoilValue(userLevelState);

  const obtainableRegions = grandisDailyQuestRegions.filter(
    (region) => characterLevel >= (minRegionsLevel[region] || 0)
  );

  const [selectedRegions, setSelectedRegions] =
    useState<GrandisDailyQuestRegion[]>(obtainableRegions);

  const handleCheckboxChange = (
    region: GrandisDailyQuestRegion,
    checked: boolean
  ) => {
    setSelectedRegions((prevSelectedRegions) => {
      if (checked) {
        return [...prevSelectedRegions, region];
      } else {
        return prevSelectedRegions.filter((r) => r !== region);
      }
    });
  };

  return (
    <GrandisQuestUI
      characterLevel={characterLevel}
      selectedRegions={selectedRegions}
      handleCheckboxChange={handleCheckboxChange}
    />
  );
};

export default GrandisQuest;
