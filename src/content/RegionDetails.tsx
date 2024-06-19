import { Box } from '@mui/material';
import MapChip from '../components/Chip/RegionList';
import RegionTab from '../components/Taps/RegionTab';

const RegionDetails = () => {
  return (
    <>
      <Box sx={{ mt: 2, mb: 2 }}>
        <RegionTab />
      </Box>

      <Box sx={{ mt: 2, mb: 2 }}>
        <MapChip />
      </Box>
    </>
  );
};

export default RegionDetails;
