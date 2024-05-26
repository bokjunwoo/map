import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import MapEventSkillCalculateTableUI from './UI/MapEventSkillCalculateTableUI';

type MapEventSkillCalculateTableProps = {
  monster: MapMonsterInfo;
  mapName: string;
  setSelectedRuneValue: React.Dispatch<React.SetStateAction<number>>;
};

const MapEventSkillCalculateTable = ({
  monster,
  mapName,
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

  return (
    <MapEventSkillCalculateTableUI
      monster={monster}
      selectedValue={selectedSkillValue}
      handleChange={handleChange}
      clickedColumn={clickedColumn}
      handleCellClick={handleCellClick}
      mapName={mapName}
    />
  );
};

export default MapEventSkillCalculateTable;
