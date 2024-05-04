import { ListItem, Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { listRGB } from '../../../data/color';
import ResourceChipUI from '../../Chip/UI/ResourceChipUI';
import ListSubheaderUI from '../../common/ListSubheaderUI';

type MapExpRateUIProps = {
  burningField: number;
  rune: number;
};

const MapExpRateUI = ({ burningField, rune }: MapExpRateUIProps) => {
  const expRate = useRecoilValue(totalExpSelector);

  const resourceList: ResourceListOption = [
    {
      iconName: 'exp',
      value: expRate,
      text: '경험치 획득량',
      color: `rgba(${listRGB.blue}, 0.3)`,
    },
    {
      iconName: 'burning',
      value: burningField,
      text: '버닝필드',
      color: 'rgba(255, 150, 138, 0.6)',
    },
    {
      iconName: 'rune',
      value: rune,
      text: '룬',
      color: `rgba(${listRGB.purple}, 0.3)`,
    },
  ];

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="적용된 스탯" />

      <Box sx={{ mb: 1 }}>
        <ResourceChipUI resourceList={resourceList} />
      </Box>
    </ListItem>
  );
};

export default MapExpRateUI;
