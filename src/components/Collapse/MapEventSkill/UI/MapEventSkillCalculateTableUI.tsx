import { ListItem, Box, SelectChangeEvent } from '@mui/material';
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
  const totalMonsterExperience = monsterExperience * 180;

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
          totalMonsterExperience={totalMonsterExperience}
          burningField={burningField}
        />
      </Box>
    </ListItem>
  );
};

export default MapEventSkillCalculateTableUI;
