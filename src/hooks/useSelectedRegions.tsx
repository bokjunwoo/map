import { useState } from 'react';

const useSelectedRegions = <T extends QuestRegion>(initialRegions: T[]) => {
  const [selectedRegions, setSelectedRegions] = useState<T[]>(initialRegions);

  const handleCheckboxChange = (region: T, checked: boolean) => {
    setSelectedRegions((prevSelectedRegions) => {
      if (checked) {
        return [...prevSelectedRegions, region];
      } else {
        return prevSelectedRegions.filter((r) => r !== region);
      }
    });
  };

  return { selectedRegions, handleCheckboxChange };
};

export default useSelectedRegions;
