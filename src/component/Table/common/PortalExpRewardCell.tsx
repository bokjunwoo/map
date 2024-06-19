import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { portalCheckState } from '../../../atoms/portalCheckState';
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
  const checkState = useRecoilValue(portalCheckState);

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const runeRate = checkState.rune ? 100 : 0;
  const sundayEventRate = checkState.sundayEvent ? 100 : 0;
  const PolloRuneRate = type === 'Pollo' ? runeRate : 0;

  const { calculatedExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: false,
    additionalExpRate: PolloRuneRate + sundayEventRate,
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
