import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import useMobCalculation from '../../../hooks/useMobCalculation';
import { calculateExpPercentage } from '../../../utils/calculate';
import { formatNumber } from '../../../utils/etc';
import { findHighestLevelMonster } from '../../../utils/mob';

type ActiveExpRewardCellUIProps = {
  mapInfo: MapInfo;
  mobKillCount: number;
  expMultiplier: number;
  isLevelProportional: boolean;
  runeValue: number;
  selectedValue: number;
  activeCell: number;
  onCellClick: (columnIndex: number) => void;
};

const ActiveExpRewardCellUI = ({
  mapInfo,
  mobKillCount,
  expMultiplier,
  isLevelProportional,
  runeValue,
  selectedValue,
  activeCell,
  onCellClick,
}: ActiveExpRewardCellUIProps) => {
  const userLevel = useRecoilValue(userLevelState);

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const { calculatedExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional,
    additionalExpRate: mapInfo.burning_field + runeValue,
  });

  const expReward = calculatedExp * mobKillCount * expMultiplier;

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
        bgcolor: activeCell === runeValue ? '#FFFFCC' : '',
        p: '4px',
      }}
      onClick={() => onCellClick(runeValue)}
    >
      {formatNumber(totalExpReward)} ({expPercentage}%)
    </TableCell>
  );
};

export default ActiveExpRewardCellUI;
