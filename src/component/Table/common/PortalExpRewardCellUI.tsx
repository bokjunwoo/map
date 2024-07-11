import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { buffExpRateSelector } from '../../../atoms/portalBuffState';
import {
  runeExpRateSelector,
  sundayEventExpEffectSelector,
  sundayEventExpRateSelector,
} from '../../../atoms/portalCheckState';
import { userLevelState } from '../../../atoms/userLevelState';
import useMobCalculation from '../../../hooks/useMobCalculation';
import { calculateExpPercentage } from '../../../utils/calculate';
import { calculatePrittoExpMultiplier } from '../../../utils/calculate/portal';
import { formatNumber } from '../../../utils/etc';
import { findHighestLevelMonster } from '../../../utils/mob';

type PortalExpRewardCellUIProps = {
  mapInfo: MapInfo;
  type: 'Pollo' | 'Pritto';
  expMultiplier: number;
};

const PortalExpRewardCellUI = ({
  mapInfo,
  type,
  expMultiplier,
}: PortalExpRewardCellUIProps) => {
  const userLevel = useRecoilValue(userLevelState);
  const runeExpRate = useRecoilValue(runeExpRateSelector);
  const sundayEventExpRate = useRecoilValue(sundayEventExpRateSelector);
  const sundayEventExpEffect = useRecoilValue(sundayEventExpEffectSelector);
  const buffExpRate = useRecoilValue(buffExpRateSelector);

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const { calculatedExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: false,
    additionalExpRate: runeExpRate + sundayEventExpRate,
  });

  const expPolloReward = calculatedExp * (expMultiplier + buffExpRate);
  const expPrittoReward =
    highestLevelMonster.experience *
    calculatePrittoExpMultiplier(expMultiplier, buffExpRate) *
    sundayEventExpEffect;

  const expPercentage = calculateExpPercentage({
    userLevel,
    expReward: type === 'Pollo' ? expPolloReward : expPrittoReward,
  });

  return (
    <TableCell align="center" sx={{ p: 0, pt: '6px', pb: '6px' }}>
      {formatNumber(type === 'Pollo' ? expPolloReward : expPrittoReward)} (
      {expPercentage}%)
    </TableCell>
  );
};

export default PortalExpRewardCellUI;
