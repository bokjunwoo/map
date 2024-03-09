import { useState, useEffect } from 'react';
import { GRANDIS_REGION, ARCANERIVER_REGION } from '../../constants/constants';
import { useLevelState } from '../../contexts/LevelStateProvider';
import { Region } from '../../interface/taps';
import RegionTabUI from './UI/RegionTabUI';

const RegionTab = () => {
  const { level } = useLevelState();

  const [value, setValue] = useState<Region>(
    level >= 260 ? GRANDIS_REGION : ARCANERIVER_REGION
  );

  const handleChange = (event: React.SyntheticEvent, newValue: Region) => {
    setValue(newValue);
  };

  const regions = [ARCANERIVER_REGION, GRANDIS_REGION];

  useEffect(() => {
    setValue(level >= 260 ? GRANDIS_REGION : ARCANERIVER_REGION);
  }, [level]);

  return (
    <RegionTabUI value={value} regions={regions} handleChange={handleChange} />
  );
};

export default RegionTab;
