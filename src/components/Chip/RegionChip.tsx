import { useRecoilState } from 'recoil';
import { regionListState } from '../../atoms/regionListState';
import ImageChipUI from './UI/ImageChipUI';

const RegionChip = ({
  region,
}: {
  region: GrandisRegion | AraneRiverRegion;
}) => {
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

  return (
    <ImageChipUI
      value={region}
      isSelected={isSelected}
      onToggle={toggleSelectedValue}
    />
  );
};

export default RegionChip;
