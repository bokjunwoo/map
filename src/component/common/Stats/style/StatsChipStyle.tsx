import styled from '@emotion/styled';
import { Chip } from '@mui/material';

const StatsChipStyle = styled(Chip)({
  display: 'flex',
  fontSize: '0.7rem',
  fontWeight: 600,
  height: 25,
  borderRadius: 0,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  '.MuiChip-label': {
    pr: '4px',
  },
});

export default StatsChipStyle;
