import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { boosterMobKillState } from '../../../../atoms/boosterMobKillState';
import { boosterRuneState } from '../../../../atoms/boosterRuneState';
import { BOOSTER } from '../../../../constants/constants';
import MapContentRewardTableUI from '../common/MapContentRewardTableUI';

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

  const menuItem: SelectValue[] = Array.from(
    { length: BOOSTER.ACTIVATION_COUNT },
    (_, i) => ({
      value: i + 1,
      label: `${i + 1}회`,
    })
  );

  const selcectThOption: SelectThOption[] = [
    {
      countLabel: '1회',
      selectedValue: 1,
    },
    {
      countLabel: `${boosterCount}회`,
      selectedValue: boosterCount,
      menuItem: menuItem,
      onCountChange: handleBoosterChange,
    },
  ];

  const expRewardOptions: ExpRewardOption[] = [
    {
      runeLabel: '룬 2배',
      runeValue: 100,
      expMultiplier: 1,
      mobKillCount: mobKillCount,
      activeCell: activeCell,
      onCellClick: handleCellClick,
      isLevelProportional: true,
    },
    {
      runeLabel: '룬 3배',
      runeValue: 200,
      expMultiplier: 1,
      mobKillCount: mobKillCount,
      activeCell: activeCell,
      isLevelProportional: true,
      onCellClick: handleCellClick,
    },
  ];

  return (
    <MapContentRewardTableUI
      mapInfo={mapInfo}
      selcectThOption={selcectThOption}
      expRewardOptions={expRewardOptions}
    />
  );
};

export default MapBoosterExpRewardTable;
