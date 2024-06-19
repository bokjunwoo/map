import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { boosterMobKillState } from '../../../atoms/boosterMobKillState';
import { boosterRuneState } from '../../../atoms/boosterRuneState';
import { BOOSTER } from '../../../constants/constants';
import MapSelectExpRewardTableUI from '../common/MapSelectExpRewardTableUI';

const MapBoosterExpRewardTable = ({ mapInfo }: MapInfoProps) => {
  const setRune = useSetRecoilState(boosterRuneState(mapInfo.map_name));
  const mobKillCount = useRecoilValue(boosterMobKillState(mapInfo.map_name));

  const [boosterCount, setBoosterCount] = useState(BOOSTER.ACTIVATION_COUNT);
  const handleBoosterChange = (event: SelectChangeEvent<unknown>) => {
    setBoosterCount(Number(event.target.value));
  };

  const [activeCell, setActiveCell] = useState(100);
  const handleCellClick = (columnIndex: number) => {
    setActiveCell(columnIndex);
    setRune(columnIndex);
  };

  const tableHead: SelectValue[] = [
    { value: 100, label: '룬 2배' },
    { value: 200, label: '룬 3배' },
  ];

  const menuItem: SelectValue[] = Array.from(
    { length: BOOSTER.ACTIVATION_COUNT },
    (_, i) => ({
      value: i + 1,
      label: `${i + 1}회`,
    })
  );

  return (
    <MapSelectExpRewardTableUI
      mapInfo={mapInfo}
      count={boosterCount}
      onCountChange={handleBoosterChange}
      activeCell={activeCell}
      onCellClick={handleCellClick}
      tableHead={tableHead}
      menuItem={menuItem}
      mobKillCount={mobKillCount}
      expMultiplier={BOOSTER.EXP_MULTIPLIER}
      isLevelProportional={false}
    />
  );
};

export default MapBoosterExpRewardTable;
