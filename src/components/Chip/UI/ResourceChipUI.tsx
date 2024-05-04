import { Stack } from '@mui/material';
import IconChipUI from './IconChipUI';

const ResourceChipUI = ({
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
          value={resource.value}
          text={resource.text}
          bgcolor={resource.color}
        />
      ))}
    </Stack>
  );
};

export default ResourceChipUI;
