import { Stack } from '@mui/material';
import { useExpRateValue } from '../../contexts/ExpRateStateProvider';
import IconChipUI from './UI/IconChipUI';

const ResourceChip = () => {
  const expRate = useExpRateValue();
  const mesoRate = 0;
  const dropRate = 0;

  const resourceList = [
    { iconName: 'exp', label: expRate, color: '#EEFAF9' },
    { iconName: 'meso', label: mesoRate, color: '#F6F8EE' },
    { iconName: 'drop', label: dropRate, color: '#FFF0F0' },
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
