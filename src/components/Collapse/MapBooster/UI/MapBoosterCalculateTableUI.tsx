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

type MapBoosterCalculateTableUIProps = {
  selectedBoosterValue: number;
  handleBoosterChange: (event: SelectChangeEvent) => void;
  headCells: HeadCell[];
  menuItem: MenuItem[];
  clickedColumn: number;
  handleCellClick: (columnIndex: number) => void;
  monsterExperience: number;
  burningField: number;
};

const MapBoosterCalculateTableUI = ({
  selectedBoosterValue,
  handleBoosterChange,
  headCells,
  menuItem,
  clickedColumn,
  handleCellClick,
  monsterExperience,
  burningField,
}: MapBoosterCalculateTableUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <Box sx={{ display: 'flex', alignItems: 'top' }}>
        <ListSubheaderUI
          title="경험치 계산"
          subtitle="룬(Lv.2)이 적용된 상태에서 계산된 수치입니다."
        />
      </Box>

      <Box sx={{ mb: 1 }}>
        <SelectedTableUI
          selectedValue={selectedBoosterValue}
          handleChange={handleBoosterChange}
          clickedColumn={clickedColumn}
          handleCellClick={handleCellClick}
          headCells={headCells}
          menuItem={menuItem}
          monsterExperience={monsterExperience}
          burningField={burningField}
          killMonsterCount={180}
        />
      </Box>
    </ListItem>
  );
};

export default MapBoosterCalculateTableUI;
