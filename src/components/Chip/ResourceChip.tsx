import { Stack } from '@mui/material';
import IconChipUI from './UI/IconChipUI';

const ResourceChip = ({
  resourceList,
}: {
  resourceList: ResourceListOption;
}) => {
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
