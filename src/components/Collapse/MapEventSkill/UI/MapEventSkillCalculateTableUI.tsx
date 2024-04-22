import { ListItem, Box, SelectChangeEvent } from '@mui/material';
import { EVENT_SKILL } from '../../../../constants/constants';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import SelectedTableUI from '../../../Table/UI/SelectedTableUI';

type HeadCell = {
  value: number;
  label: string;
};

type MenuItem = {
  value: number;
  label: string;
};

type MapEventSkillCalculateTableUIProps = {
  monsterExperience: number;
  selectedValue: number;
  handleChange: (event: SelectChangeEvent) => void;
  headCells: HeadCell[];
  menuItem: MenuItem[];
  clickedColumn: number;
  handleCellClick: (columnIndex: number) => void;
  burningField: number;
};

const MapEventSkillCalculateTableUI = ({
  monsterExperience,
  selectedValue,
  handleChange,
  clickedColumn,
  handleCellClick,
  headCells,
  menuItem,
  burningField,
}: MapEventSkillCalculateTableUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <Box sx={{ display: 'flex', alignItems: 'top' }}>
        <ListSubheaderUI title="경험치 계산" />
      </Box>

      <Box sx={{ mb: 1 }}>
        <SelectedTableUI
          selectedValue={selectedValue}
          handleChange={handleChange}
          clickedColumn={clickedColumn}
          handleCellClick={handleCellClick}
          headCells={headCells}
          menuItem={menuItem}
          monsterExperience={monsterExperience}
          burningField={burningField}
          killMonsterCount={EVENT_SKILL.KILL_MONSTER_COUNT}
        />
      </Box>
    </ListItem>
  );
};

export default MapEventSkillCalculateTableUI;
