import { ListItem, Box } from '@mui/material';
import ResourceChip from '../../../Chip/ResourceChip';
import ListSubheaderUI from '../../../common/ListSubheaderUI';

const MapCalculateRateUI = ({
  resourceList,
}: {
  resourceList: ResourceListOption;
}) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="적용된 스탯" />

      <Box sx={{ mb: 1 }}>
        <ResourceChip resourceList={resourceList} />
      </Box>
    </ListItem>
  );
};

export default MapCalculateRateUI;
