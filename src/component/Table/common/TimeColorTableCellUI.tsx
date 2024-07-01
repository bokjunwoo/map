import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import { portalCheckState } from '../../../atoms/portalCheckState';
import useMobCalculation from '../../../hooks/useMobCalculation';
import { calculateRemainingTime } from '../../../utils/calculate';
import { formatTime } from '../../../utils/etc';
import { findHighestLevelMonster } from '../../../utils/mob';

type TimeColorTableCellUIProps = {
  mapInfo: MapInfo;
  type: 'Pollo' | 'Pritto';
  expMultiplier: number;
  playTime: number;
  getTimeColor: (
    seconds: number
  ) => '#fde2e4' | '#fff1e6' | '#e2ece9' | '#dfe7fd';
};

const TimeColorTableCellUI = ({
  mapInfo,
  type,
  expMultiplier,
  playTime,
  getTimeColor,
}: TimeColorTableCellUIProps) => {
  const mobKillCount = useRecoilValue(numberOfMonsterState(mapInfo.map_name));
  const checkState = useRecoilValue(portalCheckState);

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const runeRate = checkState.rune ? 100 : 0;
  const sundayEventRate = checkState.sundayEvent ? 100 : 0;

  const { levelMultiplier, totalExpRate } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: false,
    additionalExpRate: runeRate + sundayEventRate,
  });

  const remainingTime = calculateRemainingTime({
    type,
    mobExp: highestLevelMonster.experience,
    mobKillCount,
    levelMultiplier,
    expMultiplier,
    totalExpRate,
    sundayEventRate,
    playTime,
  });

  return (
    <TableCell align="center" sx={{ bgcolor: getTimeColor(remainingTime) }}>
      약 {formatTime(remainingTime)}
    </TableCell>
  );
};

export default TimeColorTableCellUI;
