import { Stack } from '@mui/material';
import { useExpRateValue } from '../../contexts/ExpRateStateProvider';
import IconChipUI from './UI/IconChipUI';

const ResourceChip = () => {
  const expRate = useExpRateValue();
  const mesoRate = 0;
  const dropRate = 0;

  const resourceList = [
    { iconName: 'exp', label: expRate, color: '#bfff8a' },
    { iconName: 'meso', label: mesoRate, color: '#ffec8a' },
    { iconName: 'drop', label: dropRate, color: '#a1cbff' },
  ];

  return (
    <Stack direction="row" spacing={1}>
      {resourceList.map((resource) => (
        <IconChipUI
          key={resource.iconName}
          iconName={resource.iconName}
          label={resource.label}
          bgcolor={resource.color}
        />
      ))}
    </Stack>
  );
};

export default ResourceChip;
