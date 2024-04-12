import { ListItem } from '@mui/material';
import { ChangeEvent } from 'react';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import InputAdornmentUI from '../../../TextField/UI/InputAdornmentUI';

interface MapCalculateInputUIProps {
  initialNumberOfMonster: number;
  numberOfMonster: number;
  handleNumberOfMonsterChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MapCalculateInputUI = ({
  initialNumberOfMonster,
  numberOfMonster,
  handleNumberOfMonsterChange,
}: MapCalculateInputUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="마릿수 설정" />

      <InputAdornmentUI
        text="1젠당 잡을 수 있는 마릿수"
        adornment={initialNumberOfMonster}
        value={numberOfMonster}
        onChange={handleNumberOfMonsterChange}
      />
    </ListItem>
  );
};

export default MapCalculateInputUI;
