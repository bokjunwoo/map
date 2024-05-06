import { useRecoilState, useRecoilValue } from 'recoil';
import { regionListState } from '../../atoms/regionListState';
import { userLevelState } from '../../atoms/userLevelState';
import { minRegionsLevel } from '../../data/region';
import ImageChipUI from './UI/ImageChipUI';

const RegionChip = ({
  region,
}: {
  region: GrandisRegion | AraneRiverRegion;
}) => {
  const userLevel = useRecoilValue(userLevelState);
  const [regionList, setRegionList] = useRecoilState(regionListState);

  const isSelected = regionList.includes(region);

  const toggleSelectedValue = () => {
    setRegionList((prevDetailsName) => {
      if (isSelected) {
        return prevDetailsName.filter((value) => value !== region);
      } else {
        return [...prevDetailsName, region];
      }
    });
  };

  const isRegionAccessible = (
    region: GrandisRegion | AraneRiverRegion,
    userLevel: number
  ): boolean => {
    const minLevel = minRegionsLevel[region];

    return userLevel >= minLevel;
  };

  const isAccessible = isRegionAccessible(region, userLevel);

  return (
    <ImageChipUI
      value={region}
      isSelected={isSelected}
      onToggle={toggleSelectedValue}
      isAccessible={isAccessible}
    />
  );
};

export default RegionChip;
