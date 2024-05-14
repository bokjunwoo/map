import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { MapMonsterInfo } from '../../../interface/map';
import MapBoosterCalculateTableUI from './UI/MapBoosterCalculateTableUI';

type MapBoosterTableProps = {
  monster: MapMonsterInfo;
  mapName: string;
  setSelectedRuneValue: React.Dispatch<React.SetStateAction<number>>;
};

const MapBoosterCalculateTable = ({
  monster,
  mapName,
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

  return (
    <MapBoosterCalculateTableUI
      monster={monster}
      selectedBoosterValue={selectedBoosterValue}
      handleBoosterChange={handleBoosterChange}
      clickedColumn={clickedColumn}
      handleCellClick={handleCellClick}
      mapName={mapName}
    />
  );
};

export default MapBoosterCalculateTable;
