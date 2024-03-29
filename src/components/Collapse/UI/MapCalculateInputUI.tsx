import {
  ListItem,
  ListItemText,
  Box,
  Typography,
  TextField,
} from '@mui/material';
import { ChangeEvent } from 'react';

type MapCalculateInputUIProps = {
  label: string;
  value: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  maxValue: number;
};

const MapCalculateInputUI = ({
  label,
  value,
  handleChange,
  maxValue,
}: MapCalculateInputUIProps) => {
  return (
    <ListItem>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
        <Typography variant="body1">{label}</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }} marginLeft={1}>
          <TextField
            sx={{ width: 50 }}
            id={label}
            size="small"
            value={value === 0 ? '' : value}
            onChange={handleChange}
            inputProps={{ sx: { p: 0.5, textAlign: 'center' } }}
          />

          <Typography variant="body1" marginLeft={0.5}>
            / {maxValue}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default MapCalculateInputUI;
