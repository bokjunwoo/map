import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { eventSkillRuneState } from '../../../../atoms/eventSkillRuneState';
import { EVENT_SKILL } from '../../../../constants/constants';
import MapContentRewardTableUI from '../common/MapContentRewardTableUI';

const MapEventSkillExpRewardTable = ({ mapInfo }: MapInfoProps) => {
  const setRune = useSetRecoilState(eventSkillRuneState(mapInfo.map_name));

  const [evevtSkillCount, setEventSkillCount] = useState(
    EVENT_SKILL.ACTIVATION_COUNT
  );
  const handleEventSkillChange = (event: SelectChangeEvent<unknown>) => {
    setEventSkillCount(Number(event.target.value));
  };

  const [activeCell, setActiveCell] = useState(0);
  const handleCellClick = (columnIndex: number) => {
    setActiveCell(columnIndex);
    setRune(columnIndex);
  };

  const menuItem: SelectValue[] = Array.from(
    { length: EVENT_SKILL.ACTIVATION_COUNT },
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
      countLabel: `${evevtSkillCount}회`,
      selectedValue: evevtSkillCount,
      menuItem: menuItem,
      onCountChange: handleEventSkillChange,
    },
  ];

  const expRewardOptions: ExpRewardOption[] = [
    {
      runeLabel: '룬 X',
      runeValue: 0,
      expMultiplier: 1,
      mobKillCount: EVENT_SKILL.INITIAL_MOB_KILL,
      activeCell: activeCell,
      onCellClick: handleCellClick,
      isLevelProportional: true,
    },
    {
      runeLabel: '룬 2배',
      runeValue: 100,
      expMultiplier: 1,
      mobKillCount: EVENT_SKILL.INITIAL_MOB_KILL,
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

export default MapEventSkillExpRewardTable;
