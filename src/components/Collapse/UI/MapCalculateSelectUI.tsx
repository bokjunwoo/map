import { Box, Typography, TextField, SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';
import { SelectOptions } from '../../../interface/select';
import SelectCellUI from '../../common/SelectCellUI';

type MapCalculateSelectUIProps = {
  selectOptions: SelectOptions;
  selectedValue: number;
  numberOfMonster: number;
  handleSelectChange: (event: SelectChangeEvent<number>) => void;
  handleNumberOfMonsterValue: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MapCalculateSelectUI = ({
  selectOptions,
  selectedValue,
  numberOfMonster,
  handleSelectChange,
  handleNumberOfMonsterValue,
}: MapCalculateSelectUIProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SelectCellUI
          options={selectOptions}
          value={selectedValue}
          onChange={handleSelectChange}
        />

        <Typography variant="body1" marginLeft={0.5}>
          회
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.5 }}>
        <TextField
          sx={{ width: 50 }}
          size="small"
          value={numberOfMonster}
          onChange={handleNumberOfMonsterValue}
          inputProps={{ sx: { p: 0.5, textAlign: 'center' } }}
        />

        <Typography variant="body1" marginLeft={0.5}>
          마리
        </Typography>
      </Box>
    </Box>
  );
};

export default MapCalculateSelectUI;
