import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import {
  runeExpRateSelector,
  sundayEventExpRateRateSelector,
} from '../../../atoms/portalCheckState';
import { userLevelState } from '../../../atoms/userLevelState';
import useMobCalculation from '../../../hooks/useMobCalculation';
import { calculateExpPercentage } from '../../../utils/calculate';
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
  const sundayEventExpRate = useRecoilValue(sundayEventExpRateRateSelector);

  const PolloRuneRate = type === 'Pollo' ? runeExpRate : 0;
  const sundayEventEffect = sundayEventExpRate === 100 ? 2 : 1;

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const { calculatedExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: false,
    additionalExpRate: PolloRuneRate + sundayEventEffect,
  });

  const expReward = calculatedExp * expMultiplier;
  const expPercentage = calculateExpPercentage({
    userLevel,
    expReward,
  });

  return (
    <TableCell align="center" sx={{ p: 0, pt: '6px', pb: '6px' }}>
      {formatNumber(expReward)} ({expPercentage}%)
    </TableCell>
  );
};

export default PortalExpRewardCellUI;
