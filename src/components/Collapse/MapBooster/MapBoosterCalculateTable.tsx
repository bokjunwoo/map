import { ListItem, Box, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import ListSubheaderUI from '../../common/ListSubheaderUI';
import SelectedTableUI from '../../Table/UI/SelectedTableUI';

type MapBoosterTableProps = {
  totalMonsterExperience: number;
  burningField: number;
  setSelectedRuneValue: React.Dispatch<React.SetStateAction<number>>;
};

const MapBoosterCalculateTable = ({
  totalMonsterExperience,
  burningField,
  setSelectedRuneValue,
}: MapBoosterTableProps) => {
  const [selectedBoosterValue, setSelectedBoosterValue] = useState(10);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedBoosterValue(Number(event.target.value));
  };

  const [clickedColumn, setClickedColumn] = useState<number>(1);
  const handleCellClick = (columnIndex: number) => {
    setClickedColumn(columnIndex);
    setSelectedRuneValue(columnIndex);
  };

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
          subtitle="룬(에반링크 Lv.2)이 적용 중일 때 사용한다는 가정"
        />
      </Box>

      <Box sx={{ mb: 1 }}>
        <SelectedTableUI
          selectedValue={selectedBoosterValue}
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

export default MapBoosterCalculateTable;
