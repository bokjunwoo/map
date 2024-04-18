import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import MapEventSkillCalculateTableUI from './UI/MapEventSkillCalculateTableUI';

type MapEventSkillCalculateTableProps = {
  monsterExperience: number;
  burningField: number;
  setSelectedRuneValue: React.Dispatch<React.SetStateAction<number>>;
};

const MapEventSkillCalculateTable = ({
  monsterExperience,
  burningField,
  setSelectedRuneValue,
}: MapEventSkillCalculateTableProps) => {
  const [selectedSkillValue, setSelectedSkillValue] = useState(20);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedSkillValue(Number(event.target.value));
  };

  const [clickedColumn, setClickedColumn] = useState<number>(0);
  const handleCellClick = (columnIndex: number) => {
    setClickedColumn(columnIndex);
    setSelectedRuneValue(columnIndex);
  };

  const headCells = [
    { value: 0, label: '룬 적용(X)' },
    { value: 100, label: '룬 적용(2배)' },
  ];

  const menuItem = Array.from({ length: 20 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}회`,
  }));

  return (
    <MapEventSkillCalculateTableUI
      monsterExperience={monsterExperience}
      selectedValue={selectedSkillValue}
      handleChange={handleChange}
      clickedColumn={clickedColumn}
      handleCellClick={handleCellClick}
      headCells={headCells}
      menuItem={menuItem}
      burningField={burningField}
    />
  );
};

export default MapEventSkillCalculateTable;
