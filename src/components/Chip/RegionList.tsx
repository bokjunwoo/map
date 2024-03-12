import { FormGroup } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { regionState } from '../../atoms/regionState';
import { regionKeys } from '../../data/region';
import RegionChip from './RegionChip';

const RegionList = () => {
  const region = useRecoilValue(regionState);

  const regionList = regionKeys[region];

  return (
    <FormGroup row role="tabpanel">
      {regionList.map((region) => {
        return <RegionChip key={region} region={region} />;
      })}
    </FormGroup>
  );
};

export default RegionList;
