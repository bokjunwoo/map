import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import MapBoosterCalculateTableUI from './UI/MapBoosterCalculateTableUI';

type MapBoosterTableProps = {
  monsterExperience: number;
  burningField: number;
  setSelectedRuneValue: React.Dispatch<React.SetStateAction<number>>;
};

const MapBoosterCalculateTable = ({
  monsterExperience,
  burningField,
  setSelectedRuneValue,
}: MapBoosterTableProps) => {
  const [selectedBoosterValue, setSelectedBoosterValue] = useState(10);
  const handleBoosterChange = (event: SelectChangeEvent) => {
    setSelectedBoosterValue(Number(event.target.value));
  };

  const [clickedColumn, setClickedColumn] = useState<number>(100);
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
    <MapBoosterCalculateTableUI
      selectedBoosterValue={selectedBoosterValue}
      handleBoosterChange={handleBoosterChange}
      headCells={headCells}
      menuItem={menuItem}
      clickedColumn={clickedColumn}
      handleCellClick={handleCellClick}
      monsterExperience={monsterExperience}
      burningField={burningField}
    />
  );
};

export default MapBoosterCalculateTable;
