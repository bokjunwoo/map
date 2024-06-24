import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import useMobCalculation from '../../../../hooks/useMobCalculation';
import { calculateExpPercentage } from '../../../../utils/calculate';
import { formatNumber } from '../../../../utils/etc';
import { findHighestLevelMonster } from '../../../../utils/mob';

type ActiveExpRewardCellUIProps = {
  mapInfo: MapInfo;
  item: ExpRewardOption;
  selectedValue: number;
};

const ActiveExpRewardCellUI = ({
  mapInfo,
  item,
  selectedValue,
}: ActiveExpRewardCellUIProps) => {
  const userLevel = useRecoilValue(userLevelState);

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const { calculatedExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: item.isLevelProportional,
    additionalExpRate: mapInfo.burning_field + item.runeValue,
  });

  const expReward = calculatedExp * item.mobKillCount * item.expMultiplier;

  const totalExpReward = expReward * selectedValue;
  const expPercentage = calculateExpPercentage({
    userLevel,
    expReward: totalExpReward,
  });

  return (
    <TableCell
      width="41.5%"
      align="center"
      sx={{
        bgcolor: item.activeCell === item.runeValue ? '#FFFFCC' : '',
        p: '6px 0px',
      }}
      onClick={() => item.onCellClick(item.runeValue)}
    >
      {formatNumber(totalExpReward)} ({expPercentage}%)
    </TableCell>
  );
};

export default ActiveExpRewardCellUI;
