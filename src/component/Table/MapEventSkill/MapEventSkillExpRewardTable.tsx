import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { eventSkillRuneState } from '../../../atoms/eventSkillRuneState';
import { EVENT_SKILL } from '../../../constants/constants';
import MapSelectExpRewardTableUI from '../common/MapSelectExpRewardTableUI';

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

  const tableHead: SelectValue[] = [
    { value: 0, label: '룬 X' },
    { value: 100, label: '룬 2배' },
  ];

  const menuItem: SelectValue[] = Array.from(
    { length: EVENT_SKILL.ACTIVATION_COUNT },
    (_, i) => ({
      value: i + 1,
      label: `${i + 1}회`,
    })
  );

  return (
    <MapSelectExpRewardTableUI
      mapInfo={mapInfo}
      count={evevtSkillCount}
      onCountChange={handleEventSkillChange}
      activeCell={activeCell}
      onCellClick={handleCellClick}
      tableHead={tableHead}
      menuItem={menuItem}
      mobKillCount={EVENT_SKILL.INITIAL_MOB_KILL}
      expMultiplier={1}
      isLevelProportional={true}
    />
  );
};

export default MapEventSkillExpRewardTable;
