import { ListItem, Box } from '@mui/material';
import ResourceChipUI from '../../../Chip/UI/ResourceChipUI';
import ListSubheaderUI from '../../../common/ListSubheaderUI';

const MapPortalRateUI = ({
  resourceList,
}: {
  resourceList: ResourceListOption;
}) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="적용된 스탯" />

      <Box sx={{ mb: 1 }}>
        <ResourceChipUI resourceList={resourceList} />
      </Box>
    </ListItem>
  );
};

export default MapPortalRateUI;
