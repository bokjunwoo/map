import { FormGroup } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { regionState } from '../../atoms/regionState';
import { araneRiverRegions, grandisRegions } from '../../data/region';
import RegionChip from './RegionChip';

const RegionList = () => {
  const region = useRecoilValue(regionState);

  const regionList =
    region === '아케인리버' ? araneRiverRegions : grandisRegions;

  return (
    <FormGroup row role="tabpanel">
      {regionList.map((region) => {
        return <RegionChip key={region} region={region} />;
      })}
    </FormGroup>
  );
};

export default RegionList;
