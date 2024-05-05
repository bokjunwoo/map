import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { regionState } from '../../atoms/regionState';
import { userLevelState } from '../../atoms/userLevelState';
import { GRANDIS_REGION, ARCANERIVER_REGION } from '../../constants/constants';
import RegionTabUI from './UI/RegionTabUI';

const RegionTab = () => {
  const userLevel = useRecoilValue(userLevelState);

  const [region, setRegion] = useRecoilState(regionState);

  const handleChange = (event: React.SyntheticEvent, newValue: Region) => {
    setRegion(newValue);
  };

  const regions = [ARCANERIVER_REGION, GRANDIS_REGION];

  useEffect(() => {
    setRegion(userLevel >= 260 ? GRANDIS_REGION : ARCANERIVER_REGION);
  }, [userLevel, setRegion]);

  return (
    <RegionTabUI value={region} regions={regions} handleChange={handleChange} />
  );
};

export default RegionTab;
