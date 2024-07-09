import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import {
  runeExpRateSelector,
  sundayEventExpEffectSelector,
  sundayEventExpRateSelector,
} from '../../../atoms/portalCheckState';
import useMobCalculation from '../../../hooks/useMobCalculation';
import useMobRewards from '../../../hooks/useMobRewards';
import { calculateRemainingTime } from '../../../utils/calculate';
import { formatTime } from '../../../utils/etc';
import { findHighestLevelMonster } from '../../../utils/mob';

type PortalExpEfficiencyCellUIProps = {
  mapInfo: MapInfo;
  type: 'Pollo' | 'Pritto';
  expMultiplier: number;
  playTime: number;
  getTimeColor: (
    seconds: number
  ) => '#fde2e4' | '#fff1e6' | '#e2ece9' | '#dfe7fd';
};

const PortalExpEfficiencyCellUI = ({
  mapInfo,
  type,
  expMultiplier,
  playTime,
  getTimeColor,
}: PortalExpEfficiencyCellUIProps) => {
  const mobKillCount = useRecoilValue(numberOfMonsterState(mapInfo.map_name));
  const runeExpRate = useRecoilValue(runeExpRateSelector);
  const sundayEventExpRate = useRecoilValue(sundayEventExpRateSelector);
  const sundayEventExpEffect = useRecoilValue(sundayEventExpEffectSelector);

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const { calculatedExp: PolloExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: false,
    additionalExpRate: runeExpRate + sundayEventExpRate,
  });

  const { mobExp } = useMobRewards({ mapInfo, runeRate: runeExpRate });
  const mobRatio = mapInfo.number_of_monster / mobKillCount;

  const expPolloReward = PolloExp * expMultiplier;
  const expPrittoReward =
    highestLevelMonster.experience * expMultiplier * sundayEventExpEffect;

  const remainingTime = calculateRemainingTime({
    expReward: type === 'Pollo' ? expPolloReward : expPrittoReward,
    mobExp: mobExp / mobRatio,
    playTime,
  });

  return (
    <TableCell align="center" sx={{ bgcolor: getTimeColor(remainingTime) }}>
      약 {formatTime(remainingTime)}
    </TableCell>
  );
};

export default PortalExpEfficiencyCellUI;
