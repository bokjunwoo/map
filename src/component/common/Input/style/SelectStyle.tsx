import styled from '@emotion/styled';
import { Select } from '@mui/material';

const SelectStyle = styled(Select)({
  '&.MuiOutlinedInput-root': {
    height: '30.59px',
    '& fieldset': {
      border: 'none',
      borderRadius: 0,
    },
    '&:hover fieldset': {
      border: '1px solid',
      borderColor: '#FF9900',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid',
      borderColor: '#FF9900',
      boxShadow: `0 0 0 2px rgba(255, 153, 0, 0.4)`,
    },
  },
});

export default SelectStyle;
