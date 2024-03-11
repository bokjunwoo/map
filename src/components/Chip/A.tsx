import { useRecoilState } from 'recoil';
import { regionListState } from '../../atoms/regionKeysState';
import ImageChipUI from './UI/ImageChipUI';

const RegionChip = (region: string) => {
  const [regionList, setRegionList] = useRecoilState(regionListState);

  const toggleSelectedValue = () => {
    const isSelected = regionList.includes(region);
    setRegionList((prevDetailsName) => {
      if (isSelected) {
        return prevDetailsName.filter((value) => value !== region);
      } else {
        return [...prevDetailsName, region];
      }
    });
  };

  return <ImageChipUI onToggle={toggleSelectedValue} />;
};

export default RegionChip;
