import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { regionState } from '../../atoms/regionState';
import { GRANDIS_REGION, ARCANERIVER_REGION } from '../../constants/constants';
import { useLevelState } from '../../contexts/LevelStateProvider';
import { Region } from '../../interface/data';
import RegionTabUI from './UI/RegionTabUI';

const RegionTab = () => {
  const { level } = useLevelState();

  const [region, setRegion] = useRecoilState(regionState);

  const handleChange = (event: React.SyntheticEvent, newValue: Region) => {
    setRegion(newValue);
  };

  const regions = [ARCANERIVER_REGION, GRANDIS_REGION];

  useEffect(() => {
    setRegion(level >= 260 ? GRANDIS_REGION : ARCANERIVER_REGION);
  }, [level, setRegion]);

  return (
    <RegionTabUI value={region} regions={regions} handleChange={handleChange} />
  );
};

export default RegionTab;
