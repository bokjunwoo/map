import { ListItem, Box, SelectChangeEvent } from '@mui/material';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import SelectedTableUI from '../../../Table/UI/SelectedTableUI';

type MapBoosterCalculateTableUIProps = {
  monster: MapMonsterInfo;
  selectedBoosterValue: number;
  handleBoosterChange: (event: SelectChangeEvent) => void;
  clickedColumn: number;
  handleCellClick: (columnIndex: number) => void;
  mapName: string;
};

const MapBoosterCalculateTableUI = ({
  monster,
  selectedBoosterValue,
  handleBoosterChange,
  clickedColumn,
  handleCellClick,
  mapName,
}: MapBoosterCalculateTableUIProps) => {
  const headCells = [
    { value: 100, label: '룬 2배' },
    { value: 200, label: '룬 3배' },
  ];

  const menuItem = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}회`,
  }));

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
          mosterExpReward={monster.experience * 10}
          headCells={headCells}
          menuItem={menuItem}
          selectedValue={selectedBoosterValue}
          handleChange={handleBoosterChange}
          clickedColumn={clickedColumn}
          handleCellClick={handleCellClick}
          mapName={mapName}
          killMonsterCount={180}
        />
      </Box>
    </ListItem>
  );
};

export default MapBoosterCalculateTableUI;
