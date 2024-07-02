import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { numberOfMonsterState } from '../../../../atoms/numberOfMonsterState';
import useMobCalculation from '../../../../hooks/useMobCalculation';
import { formatTime } from '../../../../utils/etc';
import { findHighestLevelMonster } from '../../../../utils/mob';

type ActiveExpEfficiencyCellUIProps = {
  mapInfo: MapInfo;
  item: ExpRewardOption;
};

const ActiveExpEfficiencyCellUI = ({
  mapInfo,
  item,
}: ActiveExpEfficiencyCellUIProps) => {
  const mobKillCount = useRecoilValue(numberOfMonsterState(mapInfo.map_name));

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const { calculatedExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: item.isLevelProportional,
    additionalExpRate: mapInfo.burning_field + item.runeValue,
  });

  const { calculatedExp: mobCalculatedExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: true,
    additionalExpRate: mapInfo.burning_field + item.runeValue,
  });

  const expReward = calculatedExp * item.mobKillCount * item.expMultiplier;
  const timeToComplete =
    (expReward / (mobCalculatedExp * 8 * mobKillCount)) * 60;

  return (
    <TableCell
      align="center"
      sx={{
        bgcolor: item.activeCell === item.runeValue ? '#FFFFCC' : '',
        p: '6px 0px',
      }}
      onClick={() => item.onCellClick(item.runeValue)}
    >
      약 {formatTime(timeToComplete)}
    </TableCell>
  );
};

export default ActiveExpEfficiencyCellUI;
