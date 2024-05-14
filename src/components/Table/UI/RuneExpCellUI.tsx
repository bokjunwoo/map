import { TableCell } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { getburningFieldValue } from '../../../atoms/burningFieldState';
import { totalExpSelector } from '../../../atoms/expRateState';
import { userLevelState } from '../../../atoms/userLevelState';
import { calculateExpPercentage } from '../../../utils/calculate';
import { formatNumber } from '../../../utils/etc';

type RuneExpCellUIProps = {
  mosterExpReward: number;
  clickedColumn: number;
  head: {
    value: number;
    label: string;
  };
  handleCellClick: (columnIndex: number) => void;
  killMonsterCount: number;
  mapName: string;
};

const RuneExpCellUI = ({
  mosterExpReward,
  clickedColumn,
  head,
  handleCellClick,
  killMonsterCount,
  mapName,
}: RuneExpCellUIProps) => {
  const userLevel = useRecoilValue(userLevelState);
  const expRate = useRecoilValue(totalExpSelector);
  const burningField = useRecoilValue(getburningFieldValue(mapName));

  const expRateRatio = (expRate + head.value + burningField) / 100;

  const expReward = mosterExpReward * expRateRatio * killMonsterCount;
  const expPercentage = calculateExpPercentage({
    userLevel,
    expReward,
  });

  return (
    <TableCell
      align="center"
      sx={{
        p: 0.5,
        bgcolor: clickedColumn === head.value ? '#FFFFCC' : '',
        fontSize: 13,
      }}
      onClick={() => handleCellClick(head.value)}
    >
      {formatNumber(expReward)} ({expPercentage}%)
      <br />
    </TableCell>
  );
};

export default RuneExpCellUI;
